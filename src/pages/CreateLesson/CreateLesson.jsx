import { ControlBar } from "../../components/ControlBar/ControlBar";
import { Button } from "../../components/UI/Button/Button";

import styles from "./CreateLesson.module.css";

export const CreateLesson = () => {
  const onFormSubmit = () => {
    console.log("test");
  };
  return (
    <>
      <div className={styles.createContainer}>
        <h1>Create Lesson</h1>
        <div className={styles.createForms}>
          <div className={styles.createBox}>
            <h3>Information</h3>
            <p>Select date: add date picker input functionality</p>
            <p>time? is this needed?</p>
            <label>heading</label>
            <input type="text" value="" placeholder="eg. Year 3's Monday " />
            <p>Subject</p>
            <p>OBJECTIVE/WALT???</p>
          </div>
          <div className={styles.createBox}>
            <h3>Lesson breakdown</h3>
            <p>
              would love a drag and drop schedule as stretch goals, but first
              add simple form with select for break/lunch and NO time
            </p>
            <p>
              CLESSON Create - Create your own custom display for a SINGLE
              LESSON. objective/WALT, keywords, youtube/links?
            </p>
            <div className={styles.buttonContainer}>
              <Button
                routeLocation={"finisheddisplaygoeshere"}
                textGoesHere={"Finish"}
              />
              <Button routeLocation={"onRest"} textGoesHere={"Reset"} />
            </div>
          </div>
          <div className={styles.createBox}>
            <h3>Customisation</h3>
            <p>colors? light/dark theme?</p>
            <p>Links?? youtube links?</p>
            <p>
              cover photo? upload option? would this work for a one off? where
              does the photo get stored?
            </p>
            <p>
              create word cloud? key words? enter list and use API to create a
              word cloud
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
