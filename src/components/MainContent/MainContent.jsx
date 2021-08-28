import React, { useContext } from "react";
import classes from "./MainContent.module.scss";
import TransferFlightsFilter from "../TransferFlightsFilter/TransferFlightsFilter";
import SortTickets from "../SortTickets/SortTickets";
import Button from "../../UI/Button";
import TicketList from "../Tickets/TicketList";
import { TicketsContext } from "../../state/TicketsContext";
import { motion, AnimatePresence } from "framer-motion";

const MainContent = ({ onSearchTickets }) => {
  const { state, showLoading, getData } = useContext(TicketsContext);
  const showContent = !!state.ticketStack.length;
  const animations = {
    button: {
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { delay: 0.2, duration: 0.3 },
    },
    content: {
      initial: { opacity: 0, y: 50 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", delay: 0.55 },
      },
    },
  };

  return (
    <div className={classes.mainWrapper}>
      <AnimatePresence initial={false}>
        {!showContent && (
          <motion.div className={classes.searchField} {...animations.button}>
            <Button
              name={"Найти билеты"}
              onHandleClick={getData}
              showLoading={showLoading}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div className={classes.ticketsField} {...animations.content}>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainContent;
