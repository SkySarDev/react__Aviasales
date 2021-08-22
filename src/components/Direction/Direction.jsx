import React from "react";
import Block from "../UI/Block";
import classes from "./Direction.module.css";

const Direction = () => {
  return (
    <div className={classes.wrapper}>
      <Block>Москва, Россия (MOW) => Пхукет, Таиланд (HKT)</Block>
    </div>
  );
};

export default Direction;
