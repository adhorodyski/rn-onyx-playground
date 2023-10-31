import {atom, type Atom} from 'jotai';
import {selectAtom} from 'jotai/utils';
import {useCallback} from 'react';
import {MMKV} from 'react-native-mmkv';
import {createRandomReportsMap} from './local-source/reportSource';
import isLoadingAppSource from './local-source/isLoadingAppSource';
import betasSource from './local-source/betasSource';
import {ONYX_KEYS} from './onyx-keys';

export const defaultStorage = new MMKV();
export const reportsStorage = new MMKV({id: 'reports'});

export function getItem<T>(storage: MMKV, key: string): T | null {
  const value = storage.getString(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value);
}

// Ideally react-native-mmkv can expose a method for batched reads of all values(?)
export function getCollection<T>(collectionStorage: MMKV) {
  const keys = collectionStorage.getAllKeys();

  /**
   * PERF:
   * 2k reports - 30ms,
   * 5k reports - 80ms
   */
  const collection = keys.reduce<Record<string, T>>((acc, k) => {
    const value = getItem<T>(collectionStorage, k);

    if (!value) {
      return acc;
    }

    acc[k] = value;

    return acc;
  }, {});

  return collection;
}

export function setItem<T>(key: string, value: T): void {
  defaultStorage.set(key, JSON.stringify(value));
}

export const atomWithMMKV = <T>(key: string) => {
  const initialValue = getItem<T>(defaultStorage, key);

  const baseAtom = atom<T | null>(initialValue);

  baseAtom.onMount = setAtom => {
    const value = getItem<T>(defaultStorage, key);
    setAtom(value);

    // this may run too frequently, optimise or drop this idea
    const listener = defaultStorage.addOnValueChangedListener(k => {
      if (key !== k) {
        return;
      }

      const newValue = getItem<T>(defaultStorage, key);
      setAtom(newValue);
    });

    return () => {
      listener.remove();
    };
  };

  const readonlyAtom = atom(get => get(baseAtom));

  return readonlyAtom;
};

export const collectionAtomWithMMKV = <T>(collectionStorage: MMKV) => {
  /**
   * IDEA
   * Instead of querying MMKV for all the keys + their values on any collection 'key' change,
   * store the collection in-memory and only update affected keys when needed.
   */
  let inMemoryCollection = getCollection<T>(collectionStorage);

  const baseAtom = atom(inMemoryCollection);

  baseAtom.onMount = setAtom => {
    /**
     * Refresh the collection on mount.
     */
    const freshCollectionCopy = getCollection<T>(collectionStorage);
    inMemoryCollection = freshCollectionCopy;
    setAtom(freshCollectionCopy);

    const listener = collectionStorage.addOnValueChangedListener(keyChanged => {
      const value = getItem<T>(collectionStorage, keyChanged);

      if (!value) {
        delete inMemoryCollection[keyChanged];
      } else {
        inMemoryCollection[keyChanged] = value;
      }

      const collectionCopy = Object.assign({}, inMemoryCollection);
      setAtom(collectionCopy);
    });

    return () => {
      listener.remove();
    };
  };

  const readonlyAtom = atom(get => get(baseAtom));

  return readonlyAtom;
};

export function useSelectAtomById<T>(
  collectionAtom: Atom<Record<string, T>>,
  id: string,
) {
  return selectAtom(
    collectionAtom,
    useCallback(collection => collection[id], [id]),
  );
}

export function populateMMKV() {
  defaultStorage.clearAll();
  reportsStorage.clearAll();
  setItem(ONYX_KEYS.IS_LOADING_APP, isLoadingAppSource);
  setItem(ONYX_KEYS.BETAS, betasSource);

  // TODO populate with batched writes:
  // https://github.com/mrousavy/react-native-mmkv/pull/535
  const reports = createRandomReportsMap(10_000);
  Object.keys(reports).forEach(key =>
    reportsStorage.set(key, JSON.stringify(reports[key])),
  );
}
