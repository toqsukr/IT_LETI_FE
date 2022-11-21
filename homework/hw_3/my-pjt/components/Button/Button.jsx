import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export const Button = ({ children, onClick, type, width }) => {
  return (
    <button
      width={width}
      type={type}
      className="btn btn-primary"
      onClick={onClick}
      style={{ margin: "5px" }}
    >
      {children}
    </button>
  );
};
