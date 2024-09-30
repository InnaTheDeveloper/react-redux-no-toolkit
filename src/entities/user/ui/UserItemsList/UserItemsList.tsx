// react
import { FC } from "react";
// styles
import styles from "./UserItemsList.module.scss";
import { IUser } from "../../model/types/userTypes";
import { UserItem } from "../UserItem/UserItem";

interface UserItemsListProps {
  users: IUser[];
}

export const UserItemsList: FC<UserItemsListProps> = ({ users }) => {
  return (
    <div className={styles.UserItemsList}>
      {users.map(({ email, id, name }) => (
        <UserItem key={id} email={email} id={id} name={name} />
      ))}
    </div>
  );
};
