import { StateSchema } from "@/app/config/store/StateSchema";

export const getAdminIsLoggedIn = (state: StateSchema) =>
  state.admin.isLoggedIn;

export const getAdminUsersData = (state: StateSchema) => state.admin.usersData;

export const getAdminState = (state: StateSchema) => state.admin;

export const getAdminIsLoading = (state: StateSchema) => state.admin.isLoading;

export const getAdminIsError = (state: StateSchema) => state.admin.isError;

export const getAdminError = (state: StateSchema) => state.admin.error;
