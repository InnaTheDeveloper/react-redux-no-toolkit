import { StateSchema } from "@/app/config/store/StateSchema";

export const getUserIsLoggedIn = (state: StateSchema) => state.user.isLoggedIn;

export const getUserData = (state: StateSchema) => state.user.userData;

export const getUserState = (state: StateSchema) => state.user;

export const getUserIsLoading = (state: StateSchema) => state.user.isLoading;

export const getUserError = (state: StateSchema) => state.user.error;
