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

export type SetIsLoadingAction = {
  type: AdminActionTypes.SET_IS_LOADING;
  payload: IAdminStateSchema["isLoading"];
};

export type SetErrorAction = {
  type: AdminActionTypes.SET_ERROR;
  payload: IAdminStateSchema["error"];
};

export type SetIsErrorAction = {
  type: AdminActionTypes.SET_IS_ERROR;
  payload: IAdminStateSchema["isError"];
};

export type AdminActions =
  | SetUsersDataAction
  | SetIsLoggedInAction
  | SetIsLoadingAction
  | SetErrorAction
  | SetIsErrorAction;
