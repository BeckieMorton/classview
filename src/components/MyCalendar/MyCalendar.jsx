import React from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

import styles from "./MyCalendar.module.css";

export const MyCalendar = () => {
  return (
    <div className={styles.container}>
      <Calendar />
    </div>
  );
};
