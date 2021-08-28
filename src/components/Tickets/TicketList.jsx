import React from "react";
import classes from "./TicketList.module.scss";
import animations from "../../UI/Animations.module.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TicketItem from "./TicketItem";

const TicketList = ({ tickets }) => {
  return (
    <ul className={classes.ticketList}>
      <TransitionGroup>
        {tickets.map((ticket, i) => (
          <CSSTransition
            key={ticket.price + i}
            timeout={500}
            classNames={animations}
            appear={true}
          >
            <li>
              <TicketItem ticketRowData={ticket} />
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default TicketList;
