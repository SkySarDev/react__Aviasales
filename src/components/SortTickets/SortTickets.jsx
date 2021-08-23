import React, { useState } from "react";
import classes from "./SortTickets.module.scss";

const SortTickets = () => {
  const [active, setActive] = useState("cheaper");

  const changeActive = (e) => setActive(e.target.dataset.key);

  const renderSortButton = (text, name, classname) => {
    return (
      <li
        className={`${classes[classname]}
          ${active === name ? classes.active : ""}`}
        data-key={name}
        onClick={changeActive}
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
