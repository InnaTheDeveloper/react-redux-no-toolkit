import { Dispatch } from "redux";
import { AdminActions } from "@/entities/admin/model/types/adminActions";
import { StateSchema } from "@/app/config/store/StateSchema";
import { adminActionCreators } from "../actionCreators/adminActionCreators";
import { adminServices } from "../services/adminServices";

export const getAllUsers = (
  dispatch: Dispatch<AdminActions>,
  getState: () => StateSchema
) => {
  adminServices.getAllUsers().then(({ data }) => {
    dispatch(adminActionCreators.setUsersData(data));
  });
};
