// react
import { FC } from "react";
// styles
import styles from "./UserItem.module.scss";
import { IUser } from "../../model/types/userTypes";

interface UserItemProps extends IUser {}

export const UserItem: FC<UserItemProps> = ({ email, id, name }) => {
  return (
    <div className={styles.UserItem}>
      <div>{email}</div>
      <div>{id} </div>
      <div>{name}</div>
    </div>
  );
};
