import React from "react";
import classes from "./SortTickets.module.css";

const SortTickets = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.filterElement}>Самый дешевый</div>
      <div className={classes.filterElement}>Самый быстрый</div>
      <div className={classes.filterElement}>Оптимальный</div>
    </div>
  );
};

export default SortTickets;
