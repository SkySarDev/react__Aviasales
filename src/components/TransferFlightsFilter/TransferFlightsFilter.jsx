import React, { useContext, useState } from "react";
import classes from "./TransferFlightsFilter.module.scss";
import { TicketsContext } from "../../state/TicketsContext";
import Block from "../../UI/Block";
import TransferFlightsFilterItem from "./TransferFlightsFilterItem";

const TransferFlightsFilter = () => {
  const { dispatch } = useContext(TicketsContext);

  const [filterList, setFilterList] = useState([
    { value: "all", title: "Все", checked: true },
    { value: 0, title: "Без пересадок", checked: false },
    { value: 1, title: "1 пересадка", checked: false },
    { value: 2, title: "2 пересадки", checked: false },
    { value: 3, title: "3 пересадки", checked: false },
  ]);

  const onFilterChange = (filterName) => {
    let newFilterList;
    let newStateFilter = false;

    if (filterName === "all") {
      newFilterList = filterList.map((item) => {
        item.checked = item.value === filterName;
        return item;
      });
    } else {
      newFilterList = filterList.map((item) => {
        if (item.value === "all") {
          item.checked = false;
        } else if (filterName === item.value) {
          item.checked = !item.checked;
        }
        return item;
      });

      newStateFilter = newFilterList
        .filter((item) => item.checked)
        .map((item) => item.value);

      if (!newStateFilter.length) {
        newStateFilter = false;
        newFilterList[0].checked = true;
      }
    }

    setFilterList(newFilterList);
    dispatch({
      type: "changeFilter",
      payload: { ticketFilter: newStateFilter },
    });
    dispatch({ type: "sortData" });
  };

  return (
    <Block>
      <h3 className={classes.title}>Количество пересадок</h3>
      <div className={classes.filterList}>
        {filterList.map((filterItem) => (
          <TransferFlightsFilterItem
            filter={filterItem}
            key={filterItem.value}
            onFilterChange={onFilterChange}
          />
        ))}
      </div>
    </Block>
  );
};

export default TransferFlightsFilter;
