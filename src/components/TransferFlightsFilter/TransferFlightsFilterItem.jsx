import React from "react";
import classes from "./TransferFlightsFilterItem.module.scss";

const TransferFlightsFilterItem = ({ filter, onFilterChange }) => {
  const onHandleChange = () => {
    onFilterChange(filter.value);
  };

  return (
    <div className={classes.filterItem}>
      <input
        type="checkbox"
        id={`filter-checkbox-${filter.value}`}
        checked={filter.checked}
        onChange={onHandleChange}
      />
      <label htmlFor={`filter-checkbox-${filter.value}`}>{filter.title}</label>
    </div>
  );
};

export default TransferFlightsFilterItem;
