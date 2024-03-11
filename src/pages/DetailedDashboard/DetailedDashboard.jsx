import { ControlBar } from "../../components/ControlBar/ControlBar";
import { MyCalendar } from "../../components/MyCalendar/MyCalendar";
import { MyClock } from "../../components/MyClock/MyClock";
import { Quote } from "../../components/Quote/Quote";
import { TimeDayDate } from "../../components/TimeDayDate/TimeDayDate";
import { Weather } from "../../components/Weather/Weather";
import { OnThisDay } from "../../components/OnThisDay/OnThisDay";

import styles from "./DetailedDashboard.module.css";

export const DetailedDashboard = () => {
  return (
    <>
      <div className={styles.detailedContainer}>
        <div className={styles.detailedBox}>
          <TimeDayDate />
        </div>
        <div className={styles.detailedBox}>
          <MyCalendar />
        </div>
        <div className={styles.detailedBox}>
          <Weather />
        </div>
        <div className={styles.detailedBox}>
          <div className={styles.nestedClock}>
            <MyClock />
          </div>
          <div className={styles.info}>
            <OnThisDay />
          </div>
        </div>

        <div className={styles.detailedBox}>
          map, quote, weather? calendar, trait of the day? idiom of the day??
          quote of the day? on this day?
        </div>
        <div className={styles.detailedBox}>
          <Quote />
        </div>
        <div className={styles.detailedBox}>something here</div>
      </div>
      <ControlBar />
    </>
  );
};
