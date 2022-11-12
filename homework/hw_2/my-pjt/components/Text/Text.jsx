import React from "react";
import css from "./Text.module.css";
export const Text = ({ children }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>{children}</p>
    </div>
  );
};
