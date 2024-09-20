import { IUser } from "@/entities/user/model/types/userTypes";

export interface IAdminStateSchema {
  isLoggedIn: boolean;
  usersData: IUser[];
}
