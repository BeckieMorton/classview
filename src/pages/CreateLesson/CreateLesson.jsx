import { Button } from "../../components/UI/Button/Button";

import styles from "./CreateLesson.module.css";

export const CreateLesson = () => {
  return (
    <div className={styles.lessonContainer}>
      <h1>Create Lesson Dashboard</h1>

      <p>
        LESSON Create - Create your own custom display for a SINGLE LESSON.
        objective/WALT, keywords, youtube/links?
      </p>

      <Button routeLocation={""} textGoesHere={"Home"} />
    </div>
  );
};
