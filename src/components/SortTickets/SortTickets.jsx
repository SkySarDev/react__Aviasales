import React from "react";
import classes from "./SortTickets.module.css";
import Block from "../UI/Block";

const SortTickets = () => {
  return (
    <Block>
      <div className={classes.wrapper}>
        <div className={classes.filterElement}>Самый дешевый</div>
        <div className={classes.filterElement}>Самый быстрый</div>
        <div className={classes.filterElement}>Оптимальный</div>
      </div>
    </Block>
  );
};

export default SortTickets;
