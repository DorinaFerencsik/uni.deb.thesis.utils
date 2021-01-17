import { IBasicDiagram } from './basic-diagram.interface';
import { IDataSource } from './data-source.interface';
import { IDiagramParam } from './diagram-param.interface';

export interface IDiagramType extends IBasicDiagram {
  params: IDiagramParam[];
  data: IDataSource;
}
