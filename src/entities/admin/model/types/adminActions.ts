import { AdminActionTypes } from "../actionTypes/adminActionTypes";
import { IAdminStateSchema } from "./adminTypes";

export type SetUsersDataAction = {
  type: AdminActionTypes.SET_USERS_DATA;
  payload: IAdminStateSchema["usersData"];
};

export type SetIsLoggedInAction = {
  type: AdminActionTypes.SET_IS_LOGGED;
  payload: IAdminStateSchema["isLoggedIn"];
};

export type AdminActions = SetUsersDataAction | SetIsLoggedInAction;
