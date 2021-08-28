import React, { useContext } from "react";
import classes from "./MainContent.module.scss";
import animations from "../../UI/Animations.module.scss";
import TransferFlightsFilter from "../TransferFlightsFilter/TransferFlightsFilter";
import SortTickets from "../SortTickets/SortTickets";
import Button from "../../UI/Button";
import { Transition } from "react-transition-group";
import TicketList from "../Tickets/TicketList";
import { TicketsContext } from "../../state/TicketsContext";

const MainContent = ({ onSearchTickets }) => {
  const { state, showLoading, getData } = useContext(TicketsContext);

  return (
    <div className={classes.mainWrapper}>
      <Transition
        in={!state.ticketStack.length}
        timeout={{
          exit: 300,
        }}
        unmountOnExit
      >
        {(animationState) => (
          <div
            className={`${classes.searchField} ${animations[animationState]}`}
          >
            <Button
              name={"Найти билеты"}
              onHandleClick={getData}
              showLoading={showLoading}
            />
          </div>
        )}
      </Transition>

      <Transition
        in={!!state.ticketStack.length}
        timeout={{
          enter: 300,
        }}
        mountOnEnter
      >
        {(animationState) => (
          <div
            className={`${classes.ticketsField} ${animations[animationState]}`}
          >
            <div className={classes.sideBar}>
              <TransferFlightsFilter />
            </div>
            <div className={classes.content}>
              <SortTickets />
              <TicketList tickets={state.ticketStack} />
              <div className={classes.sectionButton}>
                <Button
                  name={"Показать еще 5 билетов!"}
                  onHandleClick={onSearchTickets}
                  showLoading={showLoading}
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default MainContent;
