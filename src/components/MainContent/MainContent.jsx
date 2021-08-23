import React from "react";
import classes from "./MainContent.module.css";
import Block from "../../UI/Block";
import TransferFlightsFilter from "../TransferFlightsFilter/TransferFlightsFilter";
import SortTickets from "../SortTickets/SortTickets";
import Button from "../../UI/Button";
import TicketItem from "../TicketItem/TicketItem";

const MainContent = ({ tickets, onSearchClick, showLoading }) => {
  return (
    <div>
      {tickets.length ? (
        <div className={classes.wrapper}>
          <div className={classes.sideBar}>
            <TransferFlightsFilter />
          </div>
          <div className={classes.content}>
            <SortTickets />
            <ul className={classes.sectionTickets}>
              {tickets.map((ticket) => {
                return (
                  <li key={ticket.price + ticket.carrier}>
                    <TicketItem data={ticket} />
                  </li>
                );
              })}
            </ul>
            <div className={classes.sectionButton}>
              <Button
                name={"Показать еще 5 билетов!"}
                onSearchClick={onSearchClick}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.wrapper}>
          <Button
            name={showLoading ? "Загрузка списка..." : "Найти билеты"}
            onSearchClick={onSearchClick}
          />
        </div>
      )}
    </div>
  );
};

export default MainContent;
