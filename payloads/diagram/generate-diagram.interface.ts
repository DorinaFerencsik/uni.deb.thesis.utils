import { DiagramType } from 'src/utils/enums/diagram/diagram-types.enum';
import { Separator, Format } from 'src/utils/types/diagram.types';

export interface IGenerateDiagramPayload {
  type: DiagramType;
  csvSeparator: Separator;
  filename: string;
  axisX: string;
  axisY: string;
  format?: Format; 
}

export interface IGenerateDiagramResponse {
  result: string;
  source: string;
  settings: IGenerateDiagramPayload;
}
