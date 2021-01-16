import { FieldTypes } from 'utils/enums/common/field-types.enum';

export interface IBasicField {
  name: string;
  label: string;
  type: FieldTypes;
  value?: any;
  options?: string[];
}
