import { IToken } from '../../interfaces/auth/token.interface';

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse extends IToken {
  firstName: string;
  lastName: string;
}

