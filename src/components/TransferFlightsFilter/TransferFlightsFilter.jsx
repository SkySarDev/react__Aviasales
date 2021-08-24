import React from "react";
import classes from "./TransferFlightsFilter.module.scss";
import Block from "../../UI/Block";

const TransferFlightsFilter = () => {
  const filterList = [
    "Все",
    "Без пересадок",
    "1 пересадка",
    "2 пересадки",
    "3 пересадки",
  ];

  return (
    <Block>
      <div>
        <h3 className={classes.title}>Количество пересадок</h3>
        <div className={classes.filterList}>
          {filterList.map((filterName, i) => {
            return (
              <div className={classes.filerItem} key={filterName}>
                <input type="checkbox" id={`filter-checkbox-${i}`} />
                <label htmlFor={`filter-checkbox-${i}`}>{filterName}</label>
              </div>
            );
          })}
        </div>
      </div>
    </Block>
  );
};

export default TransferFlightsFilter;
