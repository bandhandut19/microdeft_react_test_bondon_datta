export interface IloginType {
  email: string;
  password: string;
}
export interface IUser {
  id: string;
  name: string;
  email: string;
}
export interface IStoredUserData {
  token: string;
  userDetails: IUser;
}
