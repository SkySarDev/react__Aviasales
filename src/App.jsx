import classes from "./App.module.css";
import Header from "./components/Header/Header";
import DirectionChoice from "./components/Direction/DirectionChoice";
import React, { useState } from "react";
import useFetching from "./hooks/useFetching";
import MainContent from "./components/MainContent/MainContent";
import fetchData from "./API/fetchData";
import Loading from "./UI/Loading";

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
        <main className={classes.mainSection}>
          <DirectionChoice onSearchClick={fetching} showLoading={showLoading} />
          <Loading show={showLoading} />
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
