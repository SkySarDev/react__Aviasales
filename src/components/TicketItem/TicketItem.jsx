import React from "react";
import classes from "./TicketItem.module.css";
import Block from "../../UI/Block";
import s7logo from "../../images/S7-Logo.png";
import getTicketData from "../../functions/getTicketData";

const TicketItem = ({ ticketInfo }) => {
  const whereTo = getTicketData(ticketInfo.segments[0]);
  const backFrom = getTicketData(ticketInfo.segments[1]);

  const renderDestination = (info) => {
    return (
      <div className={classes.destination}>
        <div className={classes.destinationCol}>
          <div className={classes.destinationHeader}>
            {info.origin} – {info.destination}
          </div>
          <div>
            {info.startTime} – {info.endTime}
          </div>
        </div>
        <div className={classes.destinationCol}>
          <div>
            <div className={classes.destinationHeader}>В пути</div>
            <div className={classes.duration}>{info.duration}</div>
          </div>
        </div>
        <div className={classes.destinationCol}>
          <div className={classes.destinationHeader}>{info.stops[1]}</div>
          <div>{info.stops[0].join(", ")}</div>
        </div>
      </div>
    );
  };

  return (
    <Block>
      <div className={classes.header}>
        <div className={classes.price}>
          {`${ticketInfo.price.toLocaleString("ru")} Р`}
        </div>
        <div>
          <img src={s7logo} alt={ticketInfo.carrier} />
        </div>
      </div>
      {renderDestination(whereTo)}
      {renderDestination(backFrom)}
    </Block>
  );
};

export default TicketItem;
