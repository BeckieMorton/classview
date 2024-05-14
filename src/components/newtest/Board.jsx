import React from "react";
import Test from "./Test";
import { MenuBar } from "./MenuBar";
import { ControlBar } from "../ControlBar/ControlBar";

export const Board = () => {
  return (
    <div>
      <h1>Dashboard for widgets</h1>
      {/* <Test /> */}
      <MenuBar />
      <ControlBar />
    </div>
  );
};
