import { ControlBar } from "../../components/ControlBar/ControlBar";
import { Emotions } from "../../components/Emotions/Emotions";
import { TimeDayDate } from "../../components/TimeDayDate/TimeDayDate";
import { Button } from "../../components/UI/Button/Button";
import { Weather } from "../../components/Weather/Weather";

import styles from "./EyfsDashboard.module.css";

export const EyfsDashboard = () => {
  return (
    <>
      <div className={styles.eyfsContainer}>
        <h1>Good Morning, welcome to school!</h1>
        <div className={styles.eyfsBox}>
          <TimeDayDate eyfs={"true"} />
        </div>
        <div className={styles.eyfsBox}>
          <h1>EYFS Dashboard</h1>
        </div>
        <div className={styles.eyfsBox}>
          <Weather eyfs={"true"} />
        </div>
        <div className={styles.eyfsBox}>
          Simple - EYFS - simple/clean desktop display for the day includes
          pictures, numbers, words, shapes etc, perhaps lottie animations for
          numbers? feelings???? vegetable of the day?
        </div>
        <div className={styles.eyfsBox}>zoo animal? free api?</div>
        <div className={styles.eyfsBox}>
          <Emotions />
        </div>
      </div>
      <ControlBar />
    </>
  );
};
