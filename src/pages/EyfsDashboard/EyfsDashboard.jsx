import { ControlBar } from "../../components/ControlBar/ControlBar";
import { TimeDayDate } from "../../components/TimeDayDate/TimeDayDate";
import { Button } from "../../components/UI/Button/Button";

import styles from "./EyfsDashboard.module.css";

export const EyfsDashboard = () => {
  return (
    <>
      <div className={styles.eyfsContainer}>
        <p>
          <TimeDayDate eyfs={"true"} />
        </p>
        <h1>EYFS Dashboard</h1>
        <p>
          Simple - EYFS - simple/clean desktop display for the day includes
          pictures, numbers, words, shapes etc, perhaps lottie animations for
          numbers?
        </p>
      </div>
      <ControlBar />
    </>
  );
};
