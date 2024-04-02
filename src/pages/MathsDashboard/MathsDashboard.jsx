import { ControlBar } from "../../components/ControlBar/ControlBar";
import { MyClock } from "../../components/MyClock/MyClock";
import { TimeDayDate } from "../../components/TimeDayDate/TimeDayDate";
import { Weather } from "../../components/Weather/Weather";

import styles from "./MathsDashboard.module.css";

export const MathsDashboard = () => {
  return (
    <>
      <div className={styles.mathsContainer}>
        <div className={styles.mathsBox}>
          <h1>Focus on Mathematics</h1>
        </div>
        <div className={styles.mathsBox}>
          number of the day? maths quote or joke? sum of the day? shapes 2d 3d,
          lines, maths word of the day?
        </div>
        <div className={styles.mathsBox}>
          <TimeDayDate subject={"true"} />
          <MyClock />
        </div>
        <div className={styles.mathsBox}>
          <Weather />
          <p>what happens if i add more here??</p>
          <p>what happens if i add more here??</p>
          <p>what happens if i add more here??</p>
          <p>what happens if i add more here??</p>
          <div className={styles.info}></div>
        </div>

        <div className={styles.mathsBox}>
          map, quote, weather? calendar, trait of the day? idiom of the day??
          quote of the day? on this day?
        </div>
        <div className={styles.mathsBox}>NASA info?</div>
        <div className={styles.mathsBox}>something here</div>
      </div>
      <ControlBar />
    </>
  );
};
