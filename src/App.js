import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Direction from "./components/Direction/Direction";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.container}>
        <Header />
        <main className={classes.mainSection}>
          <Direction />
          <MainContent />
        </main>
      </div>
    </div>
  );
}

export default App;
