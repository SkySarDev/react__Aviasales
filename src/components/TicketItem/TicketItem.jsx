import React from "react";
import classes from "./TicketItem.module.css";
import Block from "../../UI/Block";

const TicketItem = ({ data }) => {
  return (
    <Block>
      <div className={classes.header}>
        <div>price</div>
        <div>carrier</div>
      </div>
      <div className={classes.content}>
        <div>destination</div>
        <div>duration</div>
        <div>stops</div>
      </div>
    </Block>
  );
};

export default TicketItem;
