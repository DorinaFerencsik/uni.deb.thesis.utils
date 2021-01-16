import { Roles } from '../../enums/user';

export interface ITokenPayload {
  id: string;
  email: string;
  roles: Roles[];
  iat: number;
  exp: number;
}
