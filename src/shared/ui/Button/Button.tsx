import { ReactNode, FC, memo } from "react";
// styles
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  bgVariant: "red" | "black";
}

export const Button: FC<ButtonProps> = memo(
  ({ children, onClick, disabled, bgVariant }) => {
    console.log("button render");

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={
          styles.Button + " " + bgVariant === "red"
            ? styles.bgRed
            : styles.bgGreen
        }
      >
        {children}
      </button>
    );
  }
);
