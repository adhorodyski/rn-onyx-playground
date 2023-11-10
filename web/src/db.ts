import initSqlite from '@sqlite.org/sqlite-wasm';
import {queryClient} from './query-client';
import {useSuspenseQuery} from '@tanstack/react-query';

const filename = 'mydb.sqlite3';
const flags = 'ct';

const sqlite3 = await initSqlite();
export const db = new sqlite3.oo1.DB(filename, flags);

db.exec(
  'CREATE TABLE IF NOT EXISTS reports (id INTEGER PRIMARY KEY, name TEXT)',
);

interface Report {
  id: number;
  name: string;
}

export const getAllReports = (): Report[] => {
  const reports = db.exec('SELECT * FROM reports', {
    returnValue: 'resultRows',
    rowMode: 'object',
  });

  return (reports as unknown as Report[]) ?? [];
};

export const addReport = (name: string) => {
  db.exec('INSERT INTO reports (name) VALUES (?)', {bind: [name]});
  queryClient.invalidateQueries({queryKey: ['reports']});
};

export const useAllReports = () =>
  useSuspenseQuery({
    queryKey: ['reports'],
    queryFn: getAllReports,
  });
