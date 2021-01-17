import { DiagramTypeEnum } from 'src/utils/enums/diagram/diagram-types.enum';
import { Format } from 'src/utils/types/diagram.types';
import { IDiagramParam } from 'utils/interfaces/diagram';

export interface IGenerateDiagramPayload {
  type: DiagramTypeEnum;
  data: {source: string, name: string},
  params: {
    [key: string]: any
  }[];
  format?: Format;
}

export interface IGenerateDiagramResponse {
  result: string;
  source: string;
  settings: IGenerateDiagramPayload;
}
