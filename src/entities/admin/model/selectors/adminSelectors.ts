import { StateSchema } from "@/app/config/store/StateSchema";

export const getAdminIsLoggedIn = (state: StateSchema) =>
  state.admin.isLoggedIn;

export const getUsersData = (state: StateSchema) => state.admin.usersData;

export const getAdminState = (state: StateSchema) => state.admin;
