export function unique<T, K>(data: T[], getKey: (item: T) => K) {
  const map = new Map<K, T>();
  for (const item of data) {
    map.set(getKey(item), item);
  }
  return Array.from(map.values());
}

export function groupBy<T, K>(data: T[], getKey: (item: T) => K) {
  const map = new Map<K, T[]>();
  for (const item of data) {
    const key = getKey(item);
    const list = map.get(key) || [];
    list.push(item);
    map.set(key, list);
  }
  return map;
}
