import { Button } from "../../components/UI/Button/Button";

import styles from "./DetailedDashboard.module.css";

export const DetailedDashboard = () => {
  return (
    <div className={styles.detailedContainer}>
      <h1>Detailed Dashboard</h1>
      <p>map, quote, weather? calendar, trait of the day? idiom of the day??</p>
      <Button routeLocation={""} textGoesHere={"Home"} />
    </div>
  );
};
