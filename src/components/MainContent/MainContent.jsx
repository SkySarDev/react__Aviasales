import React from "react";
import classes from "./MainContent.module.css";
import Block from "../UI/Block";
import TransferFlightsFilter from "../TransferFlightsFilter/TransferFlightsFilter";
import SortTickets from "../SortTickets/SortTickets";

const MainContent = ({ tickets, onSearchClick }) => {
  return (
    <div>
      {tickets.length ? (
        <div className={classes.wrapper}>
          <div className={classes.sideBar}>
            <TransferFlightsFilter />
          </div>
          <div className={classes.content}>
            <SortTickets />
            <div className={classes.ticketsList}>
              <Block>Список билетов</Block>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.wrapper}>
          <Block>
            <button onClick={() => onSearchClick()}>Найти билеты</button>
          </Block>
        </div>
      )}
    </div>
  );
};

export default MainContent;
