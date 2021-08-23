import React from "react";
import classes from "./Button.module.css";

const Button = ({ name, onSearchClick }) => {
  return (
    <button className={classes.button} onClick={onSearchClick}>
      {name}
    </button>
  );
};

export default Button;
