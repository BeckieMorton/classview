import { ControlBar } from "../../components/ControlBar/ControlBar";
import styles from "./ResearchPrompts.module.css";

export const ResearchPrompts = () => {
  return (
    <>
      <div className={styles.researchContainer}>
        <h3>Research prompts</h3>
        <div className={styles.researchBox}>
          <p>
            have more buttons here for different resource prompt options to
            display. prompts for random research ideas, inquiry learning, web
            quests??? eg. a random country to research? eg. a random fact to
            explore?
          </p>
          <p>rest countries API</p>
          <p> zoo animals api?</p>
          <p>artwork API?</p>
        </div>
      </div>
      <ControlBar />
    </>
  );
};
