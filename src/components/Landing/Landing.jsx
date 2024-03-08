import { Button } from "../../components/UI/Button/Button";

import styles from "./Landing.module.css";

export const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <h1 className={styles.heading}>ClassView</h1>
      <Button
        routeLocation={"SimpleDashboard"}
        textGoesHere={"Simple clean desktop display for the day"}
      />
      <Button routeLocation={"EyfsDashboard"} textGoesHere={"Simple EYFS"} />
      <Button
        routeLocation={"DetailedDashboard"}
        textGoesHere={"Detailed more info desktop display"}
      />
      <Button
        routeLocation={"CreateDashboard"}
        textGoesHere={"CREATE your own personalised dashboard"}
      />
      <Button
        routeLocation={"CreateLesson"}
        textGoesHere={"CREATE your own lesson dashboard"}
      />
    </div>
  );
};
