import { AdminActionTypes } from "../actionTypes/adminActionTypes";
import { SetIsLoggedInAction, SetUsersDataAction } from "../types/adminActions";

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

export const adminActionCreators = {
  setUsersData,
  setIsLoggedIn,
};
