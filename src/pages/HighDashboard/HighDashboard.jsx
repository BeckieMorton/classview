import { ControlBar } from "../../components/ControlBar/ControlBar";
import { MyCalendar } from "../../components/MyCalendar/MyCalendar";
import { MyClock } from "../../components/MyClock/MyClock";
import { Quote } from "../../components/Quote/Quote";
import { TimeDayDate } from "../../components/TimeDayDate/TimeDayDate";
import { Weather } from "../../components/Weather/Weather";
import { OnThisDay } from "../../components/OnThisDay/OnThisDay";
import { TrueOrFalse } from "../../components/TrueOrFalse/TrueOrFalse";

import styles from "./HighDashboard.module.css";

export const HighDashboard = () => {
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
          <OnThisDay />
        </div>
        <div className={styles.detailedBox}>
          <div className={styles.nestedClock}>
            <MyClock />
          </div>
          <div className={styles.info}>
            <Weather />
          </div>
        </div>
        <div className={styles.detailedBox}>
          <TrueOrFalse />
        </div>
        <div className={styles.detailedBox}>
          <p>NEW API?? can you find a completely free one?</p>
          <p>empji hub API =- free random emoji of the day????</p>
        </div>
        <div className={styles.detailedBox}>
          <Quote />
        </div>
      </div>
      <ControlBar />
    </>
  );
};
