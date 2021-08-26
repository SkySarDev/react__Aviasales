import classes from "./App.module.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import DirectionChoice from "./components/DirectionChoice/DirectionChoice";
import MainContent from "./components/MainContent/MainContent";
import useFetching from "./hooks/useFetching";
import fetchData from "./API/fetchData";

function App() {
  const [ticketData, setTicketData] = useState([]);
  const [fetching, showLoading, showError] = useFetching(async () => {
    const data = await fetchData();
    const dataStack = data.slice(0, ticketData.length + 5);
    setTicketData(dataStack);
  });

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Header />
        <main>
          <DirectionChoice />
          <MainContent
            tickets={ticketData}
            isLoading={showLoading}
            showError={showError}
            onSearchClick={fetching}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
