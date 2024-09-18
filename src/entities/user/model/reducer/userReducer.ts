import { Reducer } from "redux";
import { IUserStateSchema } from "../types/userTypes";
import { UserActions } from "../types/userActions";
import { UserActionTypes } from "../actionTypes/userActionTypes";

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
        isLoading: false,
        error: "",
      };
    }

    case UserActionTypes.SET_IS_LOGGED: {
      return { ...state, isLoggedIn: action.payload };
    }

    case UserActionTypes.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }

    case UserActionTypes.SET_ERROR: {
      return { ...state, error: action.payload, isLoading: false };
    }

    default: {
      return { ...state };
    }
  }
};
