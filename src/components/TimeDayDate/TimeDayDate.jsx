import moment from "moment";

import styles from "./TimeDayDate.module.css";

export const TimeDayDate = ({ eyfs, subject }) => {
  //get the full date
  const dateinfo =
    moment().format("dddd") + " " + moment().format("Do MMMM YYYY");
  //get the day for EYFS
  const day = moment().format("dddd");
  //get the month for EYFS
  const month = moment().format("MMMM");
  //get the time for the clock
  const time = moment().format("h:mm:ss a");

  return (
    <div className={styles.dateContainer}>
      {eyfs ? (
        <div>
          <p className={styles.eyfsDay}>
            Today is <span style={{ color: "#ffb500" }}>{day}.</span>
          </p>
          <p className={styles.eyfsDay}>
            The month is <span style={{ color: "#ffb500" }}>{month}.</span>
          </p>
        </div>
      ) : (
        <h1 style={subject ? { fontSize: "24px" } : null}>{dateinfo}</h1>
      )}
    </div>
  );
};
