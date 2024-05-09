import { useState } from "react";

import Test from "./Test";
import "./Test.css";

export const MenuBar = () => {
  const [showWidget, setShowWidget] = useState(false);
  const [widgetChosen, setWidgetChosen] = useState("");

  const handleOnClick = (event) => {
    const value = event.target.value;
    setShowWidget((show) => !show);
    setWidgetChosen(value);
  };

  console.log(`widget chosen:`, widgetChosen);

  return (
    <div className="menu-bar">
      <button onClick={handleOnClick} value={"timer"}>
        timer
      </button>
      <button onClick={handleOnClick} value={"date"}>
        date
      </button>
      <button onClick={handleOnClick} value={"weather"}>
        weather
      </button>
      <button onClick={handleOnClick} value={"clock"}>
        clock
      </button>
      {showWidget && <Test widgetChosen={widgetChosen} />}
    </div>
  );
};
