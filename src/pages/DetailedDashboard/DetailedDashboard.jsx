import { ControlBar } from "../../components/ControlBar/ControlBar";
import { Quote } from "../../components/Quote/Quote";
import { TimeDayDate } from "../../components/TimeDayDate/TimeDayDate";

import styles from "./DetailedDashboard.module.css";

export const DetailedDashboard = () => {
  return (
    <>
      <div className={styles.detailedContainer}>
        <TimeDayDate />
        <h1>Detailed Dashboard</h1>
        <p>
          <Quote />
          map, quote, weather? calendar, trait of the day? idiom of the day??
          quote of the day? on this day?
        </p>
      </div>
      <ControlBar />
    </>
  );
};
