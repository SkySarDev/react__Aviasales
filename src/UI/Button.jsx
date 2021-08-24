import React from "react";
import classes from "./Button.module.css";

const Button = ({ name, onSearchClick, isLoading }) => {
  return (
    <button
      className={classes.button}
      onClick={onSearchClick}
      disabled={isLoading}
    >
      {isLoading ? "Загрузка списка..." : name}
    </button>
  );
};

export default Button;
