import React from "react";
import Block from "../../UI/Block";
import classes from "./Direction.module.css";

const Direction = () => {
  return (
    <div className={classes.wrapper}>
      <Block>
        <select name="origin">
          <option value="MOW">Москва, Россия (MOW)</option>
        </select>
        =>
        <select name="destination">
          <option value="HKT">Пхукет, Таиланд (HKT)</option>
        </select>
        <button>Найти билеты</button>
      </Block>
    </div>
  );
};

export default Direction;
