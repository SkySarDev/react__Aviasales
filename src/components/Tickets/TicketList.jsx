import React from "react";
import classes from "./TicketList.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import TicketItem from "./TicketItem";

const TicketList = ({ ticketList, ticketStackSize }) => {
  const ticketStack = ticketList.slice(0, ticketStackSize);
  const animations = {
    initial: {
      opacity: 0,
      y: 25,
    },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
      },
    }),
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <ul className={classes.ticketList}>
        {ticketStack.map((ticket, i) => (
          <motion.li key={ticket.price + i} {...animations} custom={i}>
            <TicketItem ticketRowData={ticket} />
          </motion.li>
        ))}
      </ul>
    </AnimatePresence>
  );
};

export default TicketList;
