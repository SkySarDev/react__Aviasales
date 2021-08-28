import classes from "./App.module.css";
import React, { useReducer } from "react";
import Header from "./components/Header/Header";
import DirectionChoice from "./components/DirectionChoice/DirectionChoice";
import MainContent from "./components/MainContent/MainContent";
import useFetching from "./hooks/useFetching";
import fetchData from "./API/fetchData";
import { ticketReducer } from "./state/ticketReducer";
import { TicketsContext } from "./state/TicketsContext";

const App = () => {
  const [state, dispatch] = useReducer(ticketReducer, {
    ticketData: [],
    ticketStack: [],
    sortType: "cheaper",
  });

  const [getData, showLoading, showError] = useFetching(async () => {
    const data = await fetchData();
    dispatch({ type: "setData", payload: { data } });
    dispatch({ type: "showTicketStack" });
  });

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Header />
        <main>
          <DirectionChoice />
          <TicketsContext.Provider
            value={{ state, dispatch, showLoading, getData, showError }}
          >
            <MainContent />
          </TicketsContext.Provider>
        </main>
      </div>
    </div>
  );
};

export default App;
