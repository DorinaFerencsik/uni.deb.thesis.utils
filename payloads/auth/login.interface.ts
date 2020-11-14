import { IToken } from '../../interfaces/auth/token.interface';

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse extends IToken {
  user: {
    id: string,
    name: {
      firstName: string,
      lastName: string,
    }
  };
}

