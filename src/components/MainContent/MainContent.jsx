import React from "react";
import classes from "./MainContent.module.css";
import TransferFlightsFilter from "../TransferFlightsFilter/TransferFlightsFilter";
import SortTickets from "../SortTickets/SortTickets";
import Button from "../../UI/Button";
import TicketItem from "../TicketItem/TicketItem";

const MainContent = ({ tickets, onSearchClick, isLoading }) => {
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
                    <TicketItem ticketInfo={ticket} />
                  </li>
                );
              })}
            </ul>
            <div className={classes.sectionButton}>
              <Button
                name={"Показать еще 5 билетов!"}
                onSearchClick={onSearchClick}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.wrapper}>
          <Button
            name={"Найти билеты"}
            onSearchClick={onSearchClick}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default MainContent;
