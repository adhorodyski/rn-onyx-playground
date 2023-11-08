import {open} from 'react-native-quick-sqlite';

export const db = open({name: 'test'});

db.execute(
  'CREATE TABLE IF NOT EXISTS reports (id INTEGER PRIMARY KEY, name TEXT)',
);
