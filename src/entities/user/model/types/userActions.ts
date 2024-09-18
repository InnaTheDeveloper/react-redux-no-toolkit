import { UserActionTypes } from "../actionTypes/userActionTypes";
import { IUserStateSchema } from "./userTypes";

export type SetUserDataAction = {
  type: UserActionTypes.SET_USER_DATA;
  payload: IUserStateSchema["userData"];
};

export type SetIsLoggedInAction = {
  type: UserActionTypes.SET_IS_LOGGED;
  payload: IUserStateSchema["isLoggedIn"];
};

export type SetIsLoadingAction = {
  type: UserActionTypes.SET_IS_LOADING;
  payload: IUserStateSchema["isLoading"];
};

export type SetErrorAction = {
  type: UserActionTypes.SET_ERROR;
  payload: IUserStateSchema["error"];
};

export type UserActions =
  | SetUserDataAction
  | SetIsLoggedInAction
  | SetIsLoadingAction
  | SetErrorAction;
