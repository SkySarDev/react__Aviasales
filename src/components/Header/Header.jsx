import React from "react";
import classes from "./Header.module.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className={classes.container}>
      <img src={logo} alt="Aviasales" />
      <div className={classes.description}>
        <h1 className={classes.title}>Aviasales</h1>
        <p className={classes.subtitle}>Поиск дешёвых авиабилетов</p>
      </div>
    </div>
  );
};

export default Header;
