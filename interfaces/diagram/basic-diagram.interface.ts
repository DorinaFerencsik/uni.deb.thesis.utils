import { DiagramTypeEnum } from "utils/enums/diagram/diagram-types.enum";

export interface IBasicDiagram {
  _id: string;
  name: string;
  desc?: string;
  tags: string[];
  type: DiagramTypeEnum;
}