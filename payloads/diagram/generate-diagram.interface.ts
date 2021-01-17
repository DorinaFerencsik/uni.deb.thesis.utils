import { DiagramTypeEnum } from 'src/utils/enums/diagram/diagram-types.enum';
import { Format, Separator } from 'src/utils/types/diagram.types';

export interface IGenerateDiagramPayload {
  type: DiagramTypeEnum;
  csvSeparator: Separator;
  data: {source: string, name: string},
  axisX: string;
  axisY: string;
  format?: Format;
}

export interface IGenerateDiagramResponse {
  result: string;
  source: string;
  settings: IGenerateDiagramPayload;
}
