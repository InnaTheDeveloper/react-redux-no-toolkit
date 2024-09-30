// react
import { FC, useEffect } from "react";
// styles
import styles from "./AdminUsers.module.scss";
import { UserItemsList } from "@/entities/user/ui/UserItemsList/UserItemsList";
import { useSelector } from "react-redux";
import { getAdminState } from "../../model/selectors/adminSelectors";
import { useAppDispatch } from "@/shared/libs/hooks/useAppDispatch";
import { getAllUsers } from "../../model/thunks/adminThunks";

interface AdminUsersProps {}

export const AdminUsers: FC<AdminUsersProps> = ({}) => {
  const { usersData, isError, isLoading } = useSelector(getAdminState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUsers);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return <UserItemsList users={usersData} />;
};
