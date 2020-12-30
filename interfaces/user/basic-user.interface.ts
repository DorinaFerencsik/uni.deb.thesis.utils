import { Roles } from 'utils/enums/user/roles.enum';

export interface IBasicUser {
  email: string;
  firstName: string;
  lastName: string;
  roles: Roles[]
}
