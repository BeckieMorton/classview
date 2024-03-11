import { Button } from "../../components/UI/Button/Button";
import { BookAnimation } from "../Animations/BookAnimation";

import styles from "./Landing.module.css";

export const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.landingBox}>
        <h2 className={styles.blurb}>
          Board <span style={{ color: "#ffb500" }}>displays</span> for your
          classroom
        </h2>
        <p className={styles.smallBlurb}>
          A simple and clean way to display relevant information on your board
          for routine, lessons. Use ClassView as your go to board display.
        </p>
        <Button
          routeLocation={"SimpleDashboard"}
          textGoesHere={"Simple display"}
        />
        <Button routeLocation={"EyfsDashboard"} textGoesHere={"Simple EYFS"} />
        <Button
          routeLocation={"DetailedDashboard"}
          textGoesHere={"Detailed display"}
        />
        <Button
          routeLocation={"CreateDashboard"}
          textGoesHere={"CREATE your own"}
        />
        <Button
          routeLocation={"CreateLesson"}
          textGoesHere={"CREATE your own lesson"}
        />
      </div>
      <div className={styles.landingBox}>
        <BookAnimation />
      </div>
    </div>
  );
};
