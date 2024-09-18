import { UserActionTypes } from "../actionTypes/userActionTypes";
import {
  SetIsLoggedInAction,
  SetUserDataAction,
  SetIsLoadingAction,
  SetErrorAction,
} from "../types/userActions";

const setUserData = (
  payload: SetUserDataAction["payload"]
): SetUserDataAction => {
  return {
    type: UserActionTypes.SET_USER_DATA,
    payload: payload,
  };
};

const setIsLoggedIn = (
  payload: SetIsLoggedInAction["payload"]
): SetIsLoggedInAction => {
  return {
    type: UserActionTypes.SET_IS_LOGGED,
    payload: payload,
  };
};

const setIsLoading = (
  payload: SetIsLoadingAction["payload"]
): SetIsLoadingAction => {
  return {
    type: UserActionTypes.SET_IS_LOADING,
    payload: payload,
  };
};

const setError = (payload: SetErrorAction["payload"]): SetErrorAction => {
  return {
    type: UserActionTypes.SET_ERROR,
    payload: payload,
  };
};

export const userActionCreators = {
  setUserData,
  setIsLoggedIn,
  setIsLoading,
  setError,
};
