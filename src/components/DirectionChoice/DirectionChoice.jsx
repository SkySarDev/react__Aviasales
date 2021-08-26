import React from "react";
import Block from "../../UI/Block";
import plane from "../../images/plane.svg";
import classes from "./DirectionChoice.module.scss";

const DirectionChoice = () => {
  return (
    <div className={classes.wrapper}>
      <Block>
        <div className={classes.inner}>
          <div className={classes.selectDestination}>Москва, Россия (MOW)</div>
          <div>
            <img className={classes.planeImg} src={plane} alt={"plane"} />
          </div>
          <div className={classes.selectDestination}>Пхукет, Таиланд (HKT)</div>
        </div>
      </Block>
    </div>
  );
};

export default DirectionChoice;
