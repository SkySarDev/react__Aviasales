import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Direction from "./components/Direction/Direction";
import { useState } from "react";
import useFetching from "./hooks/useFetching";
import MainContent from "./components/MainContent/MainContent";
import fetchData from "./API/fetchData";

function App() {
  const [ticketData, setTicketData] = useState([]);
  const [fetching, showLoading, showError] = useFetching(async () => {
    const data = await fetchData();
    const dataStack = data.slice(0, ticketData.length + 5);
    console.log(dataStack);
    setTicketData(dataStack);
  });

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Header />
        <main className={classes.mainSection}>
          <Direction />
          <MainContent
            tickets={ticketData}
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
