import { Button } from "../../components/UI/Button/Button";

import styles from "./CreateDashboard.module.css";

export const CreateDashboard = () => {
  return (
    <div className={styles.createContainer}>
      <h1>Create Dashboard</h1>

      <p>
        Create - Create your own custom display - STILL TO COME - daily
        checklist? dates to remember, timetable? weekly checklist? will need a
        login for this section? or a one off?? eyfs: what are we doing today?
      </p>

      <Button routeLocation={""} textGoesHere={"Home"} />
    </div>
  );
};
