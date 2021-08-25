import React from "react";
import classes from "./MainContent.module.css";
import TransferFlightsFilter from "../TransferFlightsFilter/TransferFlightsFilter";
import SortTickets from "../SortTickets/SortTickets";
import Button from "../../UI/Button";
import TicketItem from "../TicketItem/TicketItem";
import { Transition } from "react-transition-group";

const MainContent = ({ tickets, onSearchClick, isLoading }) => {
  return (
    <Transition
      in={!!tickets.length}
      timeout={{
        enter: 250,
        exit: 500,
      }}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <div className={`${classes.mainWrapper} ${classes[state]}`}>
          <div className={classes.sideBar}>
            <TransferFlightsFilter />
          </div>
          <div className={classes.content}>
            <SortTickets />
            <ul className={classes.sectionTickets}>
              {tickets.map((ticket, i) => {
                return (
                  <li key={ticket.price + i}>
                    <TicketItem ticketRowData={ticket} />
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
      )}
    </Transition>
  );
};

export default MainContent;
