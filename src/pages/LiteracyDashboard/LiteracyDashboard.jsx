import { ControlBar } from "../../components/ControlBar/ControlBar";
import { MyClock } from "../../components/MyClock/MyClock";
import { TimeDayDate } from "../../components/TimeDayDate/TimeDayDate";
import { Weather } from "../../components/Weather/Weather";

import styles from "./LiteracyDashboard.module.css";

export const LiteracyDashboard = () => {
  return (
    <>
      <div className={styles.literacyContainer}>
        <div className={styles.literacyBox}>
          <h1>Focus on Literacy</h1>
        </div>
        <div className={styles.literacyBox}>
          generic literacy dashboards, one for EYFS, one for primary one for
          high. literacy quote, word of the day? simile?,idiom? metaphor?
          grammar for the day? book recommendation? perhaps another langauge
          word? spelling word?? word riddle? word quiz? word game? wordle?
          boggle? rhyme?
        </div>
        <div className={styles.literacyBox}>
          <TimeDayDate subject={"true"} />
          <MyClock />
        </div>
        <div className={styles.literacyBox}>
          <Weather />
          <p>what happens if i add more here??</p>
          <p>what happens if i add more here??</p>
          <p>what happens if i add more here??</p>
          <p>what happens if i add more here??</p>
          <div className={styles.info}></div>
        </div>

        <div className={styles.literacyBox}>
          map, quote, weather? calendar, trait of the day? idiom of the day??
          quote of the day? on this day?
        </div>
        <div className={styles.literacyBox}>NASA info?</div>
        <div className={styles.literacyBox}>something here</div>
      </div>
      <ControlBar />
    </>
  );
};
