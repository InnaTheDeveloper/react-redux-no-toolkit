import { Dispatch } from "redux";
import { UserActions } from "../types/userActions";
import { StateSchema } from "@/app/config/store/StateSchema";
import { userActionCreators } from "../actionCreators/userActionCreators";
import { userServices } from "../services/userServices";

export const getAllUsers = (
  dispatch: Dispatch<UserActions>,
  getState: () => StateSchema
) => {
  dispatch(userActionCreators.setIsLoading(true));

  userServices.getAllUsers().then(({ data }) => {
    dispatch(userActionCreators.setUserData(data));
  });
};
