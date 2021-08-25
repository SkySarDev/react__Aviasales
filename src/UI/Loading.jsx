import React from "react";
import "./Loading.css";
import { Transition } from "react-transition-group";

const Loading = ({ show }) => {
  return (
    <Transition
      in={show}
      timeout={{ enter: 0, exit: 200 }}
      mountOnEnter
      unmountOnExit
    >
      {(state) => <div className={`loading ${state}`}></div>}
    </Transition>
  );
};

export default Loading;
