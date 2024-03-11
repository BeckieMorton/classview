import { ControlBar } from "../../components/ControlBar/ControlBar";
import { TimeDayDate } from "../../components/TimeDayDate/TimeDayDate";
import { Button } from "../../components/UI/Button/Button";

import styles from "./EyfsDashboard.module.css";

export const EyfsDashboard = () => {
  return (
    <>
      <div className={styles.eyfsContainer}>
        <div className={styles.eyfsBox}>
          <TimeDayDate eyfs={"true"} />
        </div>
        <div className={styles.eyfsBox}>
          <h1>EYFS Dashboard</h1>
        </div>
        <div className={styles.eyfsBox}>
          <p>
            Simple - EYFS - simple/clean desktop display for the day includes
            pictures, numbers, words, shapes etc, perhaps lottie animations for
            numbers? feelings????
          </p>
        </div>
        <div className={styles.eyfsBox}>testing</div>
        <div className={styles.eyfsBox}>testing</div>
        <div className={styles.eyfsBox}>testing</div>
        <div className={styles.eyfsBox}>testing</div>
      </div>
      <ControlBar />
    </>
  );
};
