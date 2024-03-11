import { ControlBar } from "../../components/ControlBar/ControlBar";
import { MyClock } from "../../components/MyClock/MyClock";
import { Quote } from "../../components/Quote/Quote";
import { TimeDayDate } from "../../components/TimeDayDate/TimeDayDate";
import { Weather } from "../../components/Weather/Weather";

import styles from "./DetailedDashboard.module.css";

export const DetailedDashboard = () => {
  return (
    <>
      <div className={styles.detailedContainer}>
        <div className={styles.detailedBox}>
          <TimeDayDate />
        </div>
        <div className={styles.detailedBox}>
          <h1>Detailed Dashboard</h1>
        </div>
        <div className={styles.detailedBox}>
          <Weather />
        </div>
        <div className={styles.detailedBox}>
          <MyClock />
        </div>
        <div className={styles.detailedBox}>
          map, quote, weather? calendar, trait of the day? idiom of the day??
          quote of the day? on this day?
        </div>
        <div className={styles.detailedBox}>
          <Quote />
        </div>
        <div className={styles.detailedBox}>something to go here?</div>
      </div>
      <ControlBar />
    </>
  );
};
