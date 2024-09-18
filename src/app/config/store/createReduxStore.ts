import { userReducer } from "@/entities/user/model/reducer/userReducer";
import { combineReducers, createStore } from "redux";

export const createReduxStore = () => {
  const reducers = {
    user: userReducer,
  };

  const rootReducer = combineReducers(reducers);

  const store = createStore(rootReducer);

  return store;
};
