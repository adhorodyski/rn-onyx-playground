function createRandomCollection<T>(
  collectionKey: string,
  createItem: (index: number) => T,
  length = 500,
) {
  let map: Record<string, T> = {};

  for (let i = 0; i < length; i++) {
    const itemKey = `${collectionKey}_${i}`;
    map[itemKey] = createItem(i);
  }

  return map;
}

export {createRandomCollection};
