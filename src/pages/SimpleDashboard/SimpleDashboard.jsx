import { Button } from "../../components/UI/Button/Button";

import { TimeDayDate } from "../../components/TimeDayDate/TimeDayDate";

import styles from "./SimpleDashboard.module.css";
import { ControlBar } from "../../components/ControlBar/ControlBar";

export const SimpleDashboard = () => {
  return (
    <>
      <div className={styles.simpleContainer}>
        <TimeDayDate />
        <h1>Simple Dashboard</h1>
      </div>
      <ControlBar />
    </>
  );
};
