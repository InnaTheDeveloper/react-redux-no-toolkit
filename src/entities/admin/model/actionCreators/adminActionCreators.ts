import { AdminActionTypes } from "../actionTypes/adminActionTypes";
import {
  SetErrorAction,
  SetIsErrorAction,
  SetIsLoadingAction,
  SetIsLoggedInAction,
  SetUsersDataAction,
} from "../types/adminActions";

const setUsersData = (
  payload: SetUsersDataAction["payload"]
): SetUsersDataAction => {
  return {
    type: AdminActionTypes.SET_USERS_DATA,
    payload: payload,
  };
};

const setIsLoggedIn = (
  payload: SetIsLoggedInAction["payload"]
): SetIsLoggedInAction => {
  return {
    type: AdminActionTypes.SET_IS_LOGGED,
    payload: payload,
  };
};

const setIsError = (payload: SetIsErrorAction["payload"]): SetIsErrorAction => {
  return {
    type: AdminActionTypes.SET_IS_ERROR,
    payload: payload,
  };
};

const setError = (payload: SetErrorAction["payload"]): SetErrorAction => {
  return {
    type: AdminActionTypes.SET_ERROR,
    payload: payload,
  };
};

const setIsLoading = (
  payload: SetIsLoadingAction["payload"]
): SetIsLoadingAction => {
  return {
    type: AdminActionTypes.SET_IS_LOADING,
    payload: payload,
  };
};

export const adminActionCreators = {
  setUsersData,
  setIsLoggedIn,
  setIsError,
  setError,
  setIsLoading,
};
