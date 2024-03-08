import moment from "moment";

import styles from "./TimeDayDate.module.css";

export const TimeDayDate = () => {
  const dateinfo =
    moment().format("dddd") + " " + moment().format("Do MMMM YYYY, h:mm:ss a");

  console.log(dateinfo);

  return (
    <div className={styles.dateContainer}>
      <h1>{dateinfo}</h1>
    </div>
  );
};
