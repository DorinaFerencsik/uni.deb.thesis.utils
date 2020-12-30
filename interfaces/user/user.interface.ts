import { IBasicUser } from './basic-user.interface';

export interface IUser extends IBasicUser {
  _id: string;
  isVerified: boolean;
}
