import { IBasicField } from '../common/basic-field.interface';

export interface IDiagramParam extends IBasicField {
  validations?: {
    type: 'required' | 'pattern';
    value?: string;
  }[];
}
