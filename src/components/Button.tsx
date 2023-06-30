import { useState } from "react";
import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button type="button" className={styles.primaryButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
