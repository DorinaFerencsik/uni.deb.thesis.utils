import { DiagramTypeEnum } from 'src/utils/enums/diagram/diagram-types.enum';
import { Format } from 'src/utils/types/diagram.types';

export interface IGenerateDiagramPayload {
  typeId: string;
  data: {source: string, name: string};
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
