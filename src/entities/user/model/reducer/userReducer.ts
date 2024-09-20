import { UserActionTypes } from "../actionTypes/userActionTypes";
// types
import type { IUserStateSchema } from "../types/userTypes";
import type { Reducer } from "redux";
import type { UserActions } from "../types/userActions";

const initialState: IUserStateSchema = {
  isLoggedIn: false,
  userData: {
    email: "",
    id: "",
    name: "",
  },
  isLoading: false,
  error: "",
};

export const userReducer: Reducer<IUserStateSchema, UserActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UserActionTypes.SET_USER_DATA: {
      return {
        ...state,
        userData: action.payload,
      };
    }

    case UserActionTypes.SET_IS_LOGGED: {
      return { ...state, isLoggedIn: action.payload };
    }

    case UserActionTypes.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }

    case UserActionTypes.SET_ERROR: {
      return { ...state, error: action.payload };
    }

    default: {
      return state;
    }
  }
};
