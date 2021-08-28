import React from "react";
import classes from "./TicketList.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import TicketItem from "./TicketItem";

const TicketList = ({ tickets }) => {
  const animations = {
    initial: {
      opacity: 0,
      y: 25,
    },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
      },
    }),
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <ul className={classes.ticketList}>
        {tickets.map((ticket, i) => (
          <motion.li key={ticket.price + i} {...animations} custom={i}>
            <TicketItem ticketRowData={ticket} />
          </motion.li>
        ))}
      </ul>
    </AnimatePresence>
  );
};

export default TicketList;
