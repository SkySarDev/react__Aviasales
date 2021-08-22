import React from "react";
import classes from "./MainContent.module.css";
import Block from "../UI/Block";
import TransferFlightsFilter from "../TransferFlightsFilter/TransferFlightsFilter";
import SortTickets from "../SortTickets/SortTickets";

const MainContent = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.sideBar}>
        <Block>
          <TransferFlightsFilter />
        </Block>
      </div>
      <div className={classes.content}>
        <Block>
          <SortTickets />
        </Block>
        <div className={classes.ticketsList}>
          <Block>Список билетов</Block>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
