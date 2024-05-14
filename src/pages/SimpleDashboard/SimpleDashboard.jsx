import { TimeDayDate } from "../../components/TimeDayDate/TimeDayDate";
import { ControlBar } from "../../components/ControlBar/ControlBar";
import { MyClock } from "../../components/MyClock/MyClock";
import { OnThisDay } from "../../components/OnThisDay/OnThisDay";

import styles from "./SimpleDashboard.module.css";
import { Button } from "../../components/UI/Button/Button";

export const SimpleDashboard = () => {
  return (
    <>
      <div className={styles.simpleContainer}>
        <TimeDayDate />
        <div className={styles.simpleBox}>
          <MyClock />
        </div>
        <div className={styles.simpleBox}>
          <OnThisDay />
        </div>
        <div className={styles.simpleBox}>
          <Button
            routeLocation={"DragandDrop"}
            textGoesHere={"Drag and Drop"}
          />
        </div>
      </div>
      <ControlBar />
    </>
  );
};
