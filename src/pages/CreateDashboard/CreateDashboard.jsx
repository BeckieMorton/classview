import { ControlBar } from "../../components/ControlBar/ControlBar";
import { Button } from "../../components/UI/Button/Button";
import styles from "./CreateDashboard.module.css";

export const CreateDashboard = () => {
  const onFormSubmit = () => {
    console.log("test");
  };
  return (
    <>
      <div className={styles.createContainer}>
        <h1>Create Dashboard</h1>
        <div className={styles.createForms}>
          <div className={styles.createBox}>
            <h3>Information</h3>
            <p>Select date: add date picker input functionality</p>
            <label>heading</label>
            <input type="text" value="" placeholder="eg. Year 3's Monday " />
            <p>
              Term?
              <select></select>
            </p>
            <p>
              Week?
              <select></select>
            </p>
          </div>
          <div className={styles.createBox}>
            <h3>Daily Schedule/Timetable</h3>
            <p>
              would love a drag and drop schedule as stretch goals, but first
              add simple form with select for break/lunch and NO time
            </p>
            <p>
              CREATE DISPLAY NOTES - Create your own custom display - STILL TO
              COME - will need a login for this section? or a one off?? eyfs:
              what are we doing today? can have a login to SAVE the displays to
              use again i nthe future. eg. could make one for each week (paid?)
            </p>
            <p>
              <Button
                routeLocation={"finisheddisplaygoeshere"}
                textGoesHere={"Finish"}
              />
              <button>Reset</button>
            </p>
          </div>
          <div className={styles.createBox}>
            <h3>Customisation</h3>
            <p>colors? </p>
            <p> add widgets with a radio box for weather? calendar?</p>
            <p>theme? dark or light?</p>
            <p>
              cover photo? upload option? would this work for a one off? where
              does the photo get stored?
            </p>
          </div>
          <div className={styles.createBox}>
            <h3>Important reminders/dates to remember</h3>
            <p> eg. Wear P.E close tomorrow</p>
            <p> hand in your homework TODAY</p>
            <p> dont forget your permission note for the field trip</p>
          </div>

          <div className={styles.createBox}>
            <h3>To Do list</h3>
            <p>
              displays bullet points that can be ticked/crossed out when
              complete
            </p>
          </div>
        </div>
      </div>

      <ControlBar />
    </>
  );
};
