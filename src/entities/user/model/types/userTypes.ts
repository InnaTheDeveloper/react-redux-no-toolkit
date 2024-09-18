export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IUserStateSchema {
  isLoggedIn: boolean;
  userData: IUser;
  isLoading: boolean;
  error: string;
}
