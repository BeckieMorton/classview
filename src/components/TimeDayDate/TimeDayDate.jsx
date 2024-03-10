import moment from "moment";

import styles from "./TimeDayDate.module.css";

export const TimeDayDate = ({ eyfs }) => {
  //get the full date
  const dateinfo =
    moment().format("dddd") + " " + moment().format("Do MMMM YYYY, h:mm:ss a");
  //get the day for EYFS
  const day = moment().format("dddd");
  //get the month for EYFS
  const month = moment().format("MMMM");

  console.log(dateinfo);

  return (
    <div className={styles.dateContainer}>
      {eyfs ? <p>Today is {day}</p> : <h1>{dateinfo}</h1>}
    </div>
  );
};
