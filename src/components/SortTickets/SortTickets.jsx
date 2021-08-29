import React, { useContext } from "react";
import classes from "./SortTickets.module.scss";
import { TicketsContext } from "../../state/TicketsContext";

const SortTickets = () => {
  const { state, dispatch } = useContext(TicketsContext);

  const changeSortType = (e) => {
    dispatch({
      type: "changeSortType",
      payload: { sortType: e.target.dataset.key },
    });
    dispatch({ type: "sortData" });
    dispatch({ type: "showTicketStack" });
  };

  const renderSortButton = (text, name, classname) => {
    return (
      <li
        className={`${classes[classname]}
          ${state.sortType === name ? classes.active : ""}`}
        data-key={name}
        onClick={changeSortType}
      >
        {text}
      </li>
    );
  };

  return (
    <ul className={classes.sortingPanel}>
      {renderSortButton("Самый дешевый", "cheaper", "left")}
      {renderSortButton("Самый быстрый", "faster", "center")}
      {renderSortButton("Оптимальный", "optimal", "right")}
    </ul>
  );
};

export default SortTickets;
