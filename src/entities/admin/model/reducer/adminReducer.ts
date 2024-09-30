import { AdminActionTypes } from "../actionTypes/adminActionTypes";
// types
import type { IAdminStateSchema } from "../types/adminTypes";
import type { Reducer } from "redux";
import type { AdminActions } from "../types/adminActions";

const initialState: IAdminStateSchema = {
  isLoggedIn: false,
  usersData: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const adminReducer: Reducer<IAdminStateSchema, AdminActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AdminActionTypes.SET_USERS_DATA: {
      return {
        ...state,
        usersData: action.payload,
      };
    }

    case AdminActionTypes.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }

    case AdminActionTypes.SET_IS_ERROR: {
      return { ...state, isError: action.payload };
    }

    case AdminActionTypes.SET_ERROR: {
      return { ...state, error: action.payload };
    }

    case AdminActionTypes.SET_IS_LOGGED: {
      return { ...state, isLoggedIn: action.payload };
    }

    default: {
      return state;
    }
  }
};
