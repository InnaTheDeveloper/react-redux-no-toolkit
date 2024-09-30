import { adminReducer } from "@/entities/admin/model/reducer/adminReducer";
import { userReducer } from "@/entities/user/model/reducer/userReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk as ThunkMiddleware } from "redux-thunk";

export const createReduxStore = () => {
  const reducers = {
    user: userReducer,
    admin: adminReducer,
  };

  const rootReducer = combineReducers(reducers);

  // @ts-expect-error
  const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

  return store;
};
