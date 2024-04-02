import { ControlBar } from "../../components/ControlBar/ControlBar";
import { MyClock } from "../../components/MyClock/MyClock";
import { TimeDayDate } from "../../components/TimeDayDate/TimeDayDate";
import { Weather } from "../../components/Weather/Weather";

import styles from "./ScienceDashboard.module.css";

export const ScienceDashboard = () => {
  return (
    <>
      <div className={styles.scienceContainer}>
        <div className={styles.scienceBox}>
          <h1>Focus on Science</h1>
        </div>
        <div className={styles.scienceBox}>
          general science? science facts? Periodic table? classification, a
          plant diagram, some diagrams? that leonardo davinci man picture?
          speace stuff? eg. where a rover is? or focus on a planet/star? NASA
          astronomy picture of the day, animals display?? mars rover latest
          photo?
        </div>
        <div className={styles.scienceBox}>
          <TimeDayDate subject={"true"} />
          <MyClock />
        </div>
        <div className={styles.sciencedBox}>
          <Weather />
          <p>what happens if i add more here??</p>
          <p>what happens if i add more here??</p>
          <p>what happens if i add more here??</p>
          <p>what happens if i add more here??</p>
          <div className={styles.info}></div>
        </div>

        <div className={styles.scienceBox}>
          map, quote, weather? calendar, trait of the day? idiom of the day??
          quote of the day? on this day?
        </div>
        <div className={styles.scienceBox}>NASA info?</div>
        <div className={styles.scienceBox}>endangered species?</div>
      </div>
      <ControlBar />
    </>
  );
};
