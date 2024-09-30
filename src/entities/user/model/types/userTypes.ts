export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IUserStateSchema {
  userData: IUser;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string;
}
