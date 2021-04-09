import { IStat } from 'utils/interfaces/file/stat.interface';

export interface IFileStat {
  stats: IStat;
  columns: string[];
  rows: number;
  fileName: string;
  generatedAt: Date;
}
