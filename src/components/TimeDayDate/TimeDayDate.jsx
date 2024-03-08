import React from "react";
import moment from "moment";

export const TimeDayDate = () => {
  const dateinfo =
    moment().format("dddd") + " " + moment().format("Do MMMM YYYY, h:mm:ss a");

  console.log(dateinfo);

  return (
    <div>
      <h1>TimeDayDate</h1>
      <p>{dateinfo}</p>
    </div>
  );
};
