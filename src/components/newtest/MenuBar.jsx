import React, { useState } from "react";

import Test from "./Test";
import "./Test.css";

export const MenuBar = () => {
  const [selectedWidgets, setSelectedWidgets] = useState([]);

  const handleOnClick = (event) => {
    const value = event.target.value;
    if (!selectedWidgets.includes(value)) {
      setSelectedWidgets([...selectedWidgets, value]);
    } else {
      setSelectedWidgets(selectedWidgets.filter((widget) => widget !== value));
    }
  };

  return (
    <div className="menu-bar">
      <button onClick={handleOnClick} value={"MyClock"}>
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
      {selectedWidgets.map((widget) => (
        <Test key={widget} widgetChosen={widget} />
      ))}
    </div>
  );
};
