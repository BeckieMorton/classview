import { ControlBar } from "../../components/ControlBar/ControlBar";

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
            <p>testing to see length</p>
            <p>testing to see length</p>
            <p>testing to see length</p>
            <p>testing to see length</p>
          </div>
          <div className={styles.createBox}>
            Customisation
            <p>colors? add widgets with a radio box? weather? calendar?</p>
          </div>
          <div className={styles.createBox}>
            <h3>Important reminders</h3>
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

        <p>
          Create - Create your own custom display - STILL TO COME - daily
          checklist? dates to remember, timetable? weekly checklist? will need a
          login for this section? or a one off?? eyfs: what are we doing today?
          can have a login to SAVE the displays to use again i nthe future. eg.
          could make one for each week (paid?)
        </p>
      </div>

      <ControlBar />
    </>
  );
};
