import React from "react";
import classes from "./Button.module.css";

const Button = ({ name, onHandleClick, showLoading }) => {
  return (
    <button
      className={classes.button}
      onClick={onHandleClick}
      disabled={showLoading}
    >
      {showLoading ? "Загрузка списка..." : name}
    </button>
  );
};

export default Button;
