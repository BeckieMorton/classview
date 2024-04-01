import { ControlBar } from "../../components/ControlBar/ControlBar";
import styles from "./LiteracyDashboard.module.css";

export const LiteracyDashboard = () => {
  return (
    <>
      <div className={styles.literacyContainer}>
        <h3>LiteracyDashboard</h3>
        <div className={styles.literacyBox}>
          <p>
            generic literacy dashboards, one for EYFS, one for primary one for
            high. literacy quote, word of the day? simile?,idiom? metaphor?
            grammar for the day? book recommendation? perhaps another langauge
            word? spelling word?? word riddle? word quiz? word game? wordle?
            boggle? rhyme?
          </p>
        </div>
      </div>
      <ControlBar />
    </>
  );
};
