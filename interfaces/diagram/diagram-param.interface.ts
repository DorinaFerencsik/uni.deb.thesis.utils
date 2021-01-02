import { Format, Separator } from "utils/types/diagram.types";

export interface IDiagramParam {
  name: string;
  type: 'string' | Separator | Format | 'boolean';
  required: boolean;
  default?: any;
}