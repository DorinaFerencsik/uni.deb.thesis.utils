import { Roles } from "utils/enums/user";

export interface IAccessToken {
  accessToken: string,
}

export interface IToken extends IAccessToken {
  refreshToken: string,
}

export interface ITokenPayload {
  email: string;
  roles: Roles[];
}
