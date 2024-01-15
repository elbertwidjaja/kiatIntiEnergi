import React from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  title: string;
  size?: "s" | "m" | "l";
}

function Button({ title, size = "m" }: ButtonProps) {
  const sizeClass =
    size === "s" ? styles.small : size === "l" ? styles.large : "";

  return (
    <div>
      <button className={`${styles.button} ${sizeClass}`}>{title}</button>
    </div>
  );
}

export default Button;
