import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Direction from "./components/Direction/Direction";
import { useState } from "react";
import useFetching from "./hooks/useFetching";
import MainContent from "./components/MainContent/MainContent";
import fetchData from "./API/fetchData";

function App() {
  const [tickets, setTickets] = useState([]);
  const [fetching, showLoading, showError] = useFetching(async () =>
    setTickets(await fetchData())
  );

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Header />
        <main className={classes.mainSection}>
          <Direction />
          <MainContent
            tickets={tickets}
            showLoading={showLoading}
            showError={showError}
            onSearchClick={fetching}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
