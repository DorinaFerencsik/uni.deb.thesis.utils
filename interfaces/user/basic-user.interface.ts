import { Roles } from 'utils/enums/user';

export interface IBasicUser {
  email: string;
  firstName: string;
  lastName: string;
  roles: Roles[];
}
