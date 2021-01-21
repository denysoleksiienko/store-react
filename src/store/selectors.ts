import { IUserFormValues } from 'interfaces/FormValues';
interface IUser {
  user: IUserFormValues;
}

export const userState = (state: IUser) => state.user;
