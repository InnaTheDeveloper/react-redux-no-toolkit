import { Dispatch } from "redux";
import { AdminActions } from "@/entities/admin/model/types/adminActions";
import { StateSchema } from "@/app/config/store/StateSchema";
import { adminActionCreators } from "../actionCreators/adminActionCreators";
import { adminServices } from "../services/adminServices";

export const getAllUsers = (
  dispatch: Dispatch<AdminActions>,
  getState: () => StateSchema
) => {
  const { setError, setIsError, setIsLoading, setUsersData } =
    adminActionCreators;

  dispatch(setIsLoading(true));

  adminServices
    .getAllUsers()
    .then(({ data }) => {
      dispatch(setUsersData(data));
    })
    .catch((error) => {
      dispatch(setError(error.message));
      dispatch(setIsError(true));
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    });
};
