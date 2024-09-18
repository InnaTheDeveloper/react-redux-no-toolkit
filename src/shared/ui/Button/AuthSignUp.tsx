// react
import { FC, useState } from "react";
// styles
import styles from "./AuthSignUp.module.scss";

interface AuthSignUpProps {}

export const AuthSignUp: FC<AuthSignUpProps> = ({}) => {
  const [data, setData] = useState({
    email: {
      value: "",
      error: false,
      errorMessage: "Email is required",
    },

    password: {
      value: "",
      error: false,
      errorMessage: "Password is required",
    },

    confirmPassword: {
      value: "",
      error: false,
      errorMessage: "Confirm password is required",
    },
  });

  const onSubmit = (value: keyof typeof data) => {};

  return <div className={styles.AuthSignUp}></div>;
};
