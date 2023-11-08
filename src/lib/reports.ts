import {useSuspenseQuery} from '@tanstack/react-query';
import {db} from './db';
import {queryClient} from './query-client';

interface Report {
  id: number;
  name: string;
}

export const getAllReports = (): Report[] => {
  return db.execute('SELECT * FROM reports').rows?._array ?? [];
};

export const addReport = (name: string) => {
  db.execute('INSERT INTO reports (name) VALUES (?)', [name]);
  queryClient.invalidateQueries({queryKey: ['reports']});
};

export const useAllReports = () =>
  useSuspenseQuery({
    queryKey: ['reports'],
    queryFn: getAllReports,
  });
