import { IDatasetInfo } from 'utils/interfaces/diagram/dataset-info.interface';

export interface IDatasetList {
  source: string,
  datasets: IDatasetInfo[],
}
