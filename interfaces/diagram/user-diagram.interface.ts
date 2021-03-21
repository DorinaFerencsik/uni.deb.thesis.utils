import { IDataSource } from './data-source.interface';

export interface IUserDiagram  {
  _id?: any;
  userId?: string;
  diagramTypeId: string;
  name: string;
  // The full definition of parameters should be kept at the diagram types,
  // so it can be modified with ease.
  params: {name: string, value: any}[];
  data: IDataSource;
}
