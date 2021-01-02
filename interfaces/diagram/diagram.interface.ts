import { IBasicDiagram } from './basic-diagram.interface';
import { IDiagramParam } from './diagram-param.interface';

export interface IDiagram extends IBasicDiagram {
  params: IDiagramParam[];
}