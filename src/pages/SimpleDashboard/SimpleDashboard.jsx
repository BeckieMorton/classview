import { TimeDayDate } from "../../components/TimeDayDate/TimeDayDate";
import { ControlBar } from "../../components/ControlBar/ControlBar";
import { MyClock } from "../../components/MyClock/MyClock";
import { OnThisDay } from "../../components/OnThisDay/OnThisDay";
import { NewsFeed } from "../../components/NewsFeed/NewsFeed";

import styles from "./SimpleDashboard.module.css";

export const SimpleDashboard = () => {
  return (
    <>
      <div className={styles.simpleContainer}>
        <TimeDayDate />
        <div className={styles.simpleBox}>
          <MyClock />
        </div>
        <div className={styles.simpleBox}>
          <MyClock />
        </div>
        <div className={styles.simpleBox}>
          <MyClock />
        </div>
        <OnThisDay />
        <NewsFeed />
      </div>
      <ControlBar />
    </>
  );
};
