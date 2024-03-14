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
        <div className={styles.formContainer}>
          <form onSubmit={onFormSubmit}>
            <label>Selct time:</label>
            <select id="timeSelect">
              <option value="7:30am">7:30am</option>
              <option value="8:00am">0:00am</option>
              <option value="0:30am">0:30am</option>
            </select>
            <label>
              <input name="enter here" />
            </label>
            <select id="timeSelect">
              <option value="7:30am">7:30am</option>
              <option value="8:00am">0:00am</option>
              <option value="0:30am">0:30am</option>
            </select>
            <label>
              Schedule:
              <input name="enter here" />
            </label>
            <div className={styles.formBox}>
              <p>Display options</p>
              <label>
                <input type="checkbox" name="displayoptions" value="clock" />
                Clock
              </label>
              <label>
                <input type="checkbox" name="displayoptions" value="calendar" />
                Calendar
              </label>
              <label>
                <input type="checkbox" name="displayoptions" value="weather" />
                Weather
              </label>
              <label>
                <input type="checkbox" name="displayoptions" value="quote" />
                Daily Quote
              </label>
              <label>
                <input
                  type="checkbox"
                  name="displayoptions"
                  value="onthisday"
                />
                On this day
              </label>

              <input type="submit" value="Submit"></input>
            </div>
            <div className={styles.formBox}>Reminders?</div>
            <div className={styles.formBox}>Notes</div>
          </form>
        </div>

        <p>
          Create - Create your own custom display - STILL TO COME - daily
          checklist? dates to remember, timetable? weekly checklist? will need a
          login for this section? or a one off?? eyfs: what are we doing today?
        </p>
      </div>
      <ControlBar />
    </>
  );
};
