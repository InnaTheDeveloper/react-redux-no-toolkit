import { AdminActionTypes } from "../actionTypes/adminActionTypes";
// types
import type { IAdminStateSchema } from "../types/adminTypes";
import type { Reducer } from "redux";
import type { AdminActions } from "../types/adminActions";

const initialState: IAdminStateSchema = {
  isLoggedIn: false,
  usersData: [
    {
      email: "",
      id: "",
      name: "",
    },
  ],
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

    case AdminActionTypes.SET_IS_LOGGED: {
      return { ...state, isLoggedIn: action.payload };
    }

    default: {
      return state;
    }
  }
};
