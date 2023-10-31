import React, {useEffect, useRef} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {useAtomValue} from 'jotai';
import {ONYX_KEYS} from '../../lib/onyx-keys';
import {
  collectionAtomWithMMKV,
  reportsStorage,
  useSelectAtomById,
} from '../../lib/mmkv';
import {
  createRandomReport,
  type Report,
} from '../../lib/local-source/reportSource';

const reportsAtom = collectionAtomWithMMKV<Report>(reportsStorage);

function EditComponent() {
  return (
    <View style={{flex: 1}}>
      <Button
        title="Randomize report 0"
        onPress={() =>
          reportsStorage.set(
            `${ONYX_KEYS.COLLECTION.REPORTS}0`,
            JSON.stringify(createRandomReport(0)),
          )
        }
      />

      <Button
        title="Randomize report 1"
        onPress={() =>
          reportsStorage.set(
            `${ONYX_KEYS.COLLECTION.REPORTS}1`,
            JSON.stringify(createRandomReport(1)),
          )
        }
      />
    </View>
  );
}

function JotaiProvidedKey() {
  const reports = useAtomValue(reportsAtom);
  const renderCounter = useRef(0);

  useEffect(() => {
    renderCounter.current += 1;
  });

  return (
    <View style={{flex: 1, padding: 4, backgroundColor: 'lightgreen'}}>
      <Text style={{fontWeight: 'bold'}}>
        Render count: {renderCounter.current}
      </Text>
      <FlatList
        data={Object.values(reports)}
        renderItem={({item}) => (
          <Text>
            {item.reportID}: {item.ownerEmail}
          </Text>
        )}
      />
    </View>
  );
}

function JotaiProvidedKeySelector({id}: any) {
  const report = useAtomValue(useSelectAtomById(reportsAtom, id));
  const renderCounter = useRef(0);

  useEffect(() => {
    renderCounter.current += 1;
  });

  return (
    <View style={{flex: 1, padding: 4, backgroundColor: 'lightgreen'}}>
      <Text style={{fontWeight: 'bold'}}>
        Render count: {renderCounter.current}
      </Text>
      {report ? (
        <Text>
          {report?.reportID}: {report?.ownerEmail}
        </Text>
      ) : (
        <Text>No report with id: {id}</Text>
      )}
    </View>
  );
}

function CollectionScreenJotaiMMKV() {
  return (
    <>
      <EditComponent />

      <JotaiProvidedKeySelector id={`${ONYX_KEYS.COLLECTION.REPORTS}0`} />
      <JotaiProvidedKey />
    </>
  );
}

export {CollectionScreenJotaiMMKV};
