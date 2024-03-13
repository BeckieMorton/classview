import { Button } from "../../components/UI/Button/Button";

import { TimeDayDate } from "../../components/TimeDayDate/TimeDayDate";

import styles from "./SimpleDashboard.module.css";
import { ControlBar } from "../../components/ControlBar/ControlBar";
import { MyClock } from "../../components/MyClock/MyClock";
import { OnThisDay } from "../../components/OnThisDay/OnThisDay";
import { NewsFeed } from "../../components/NewsFeed/NewsFeed";

export const SimpleDashboard = () => {
  return (
    <>
      <div className={styles.simpleContainer}>
        <TimeDayDate />
        <h1>Simple Dashboard</h1>
        <p>The my clock component is below:</p>
        <MyClock />
        <OnThisDay />
        <NewsFeed />
      </div>
      <ControlBar />
    </>
  );
};
