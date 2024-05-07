import React from "react";
import "./Wrapper.css";

function Wrapper({ children, center, style }) {
  const wrapperClasses = ["Wrapper"];
  if (center) {
    wrapperClasses.push("center");
  }

  return (
    <div className={wrapperClasses.join(" ")} style={style}>
      {children}
    </div>
  );
}

export default Wrapper;
