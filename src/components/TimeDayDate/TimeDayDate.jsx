import moment from "moment";

import styles from "./TimeDayDate.module.css";

export const TimeDayDate = ({ eyfs }) => {
  //get the full date
  const dateinfo =
    moment().format("dddd") + " " + moment().format("Do MMMM YYYY");
  //get the day for EYFS
  const day = moment().format("dddd");
  //get the month for EYFS
  const month = moment().format("MMMM");

  //get the time for the clock
  const time = moment().format("h:mm:ss a");

  console.log(time);

  console.log(dateinfo);

  return (
    <div className={styles.dateContainer}>
      {eyfs ? <p>Today is {day}</p> : <h1>Today is {dateinfo}</h1>}
    </div>
  );
};
