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
        <div className={styles.buttonContainer}>
          <Button
            routeLocation={"SimpleDashboard"}
            textGoesHere={"Simple display"}
          />
          <Button
            routeLocation={"EyfsDashboard"}
            textGoesHere={"Simple EYFS"}
          />
          <Button
            routeLocation={"DetailedDashboard"}
            textGoesHere={"Detailed display"}
          />
          <Button
            routeLocation={"HighDashboard"}
            textGoesHere={"High School General display"}
          />
          <Button
            routeLocation={"CreateDashboard"}
            textGoesHere={"CREATE your own"}
          />
          <Button
            routeLocation={"CreateLesson"}
            textGoesHere={"CREATE your own lesson, subject specific"}
          />
          <Button
            routeLocation={"LiteracyDashboard"}
            textGoesHere={"Generic literacy displays (EYFS, Primary, High)"}
          />
          <Button
            routeLocation={"MathsDashboard"}
            textGoesHere={"Generic math displays (EYFS, Primary, High)"}
          />
          <Button
            routeLocation={"ScienceDashboard"}
            textGoesHere={"Generic science displays (EYFS, Primary, High)"}
          />
          <Button
            routeLocation={"ResearchPrompts"}
            textGoesHere={"Research random facts, countries, web quests etc"}
          />
        </div>
        <p>
          another idea is to make one page substitute prompts for casualt
          teachers to press and display, have various tasks on them., like
          twinkl's mats, for each subject for each grade, they change daily?
        </p>
        <p>another idea is a bookmark manager for teachers, save youtube etc</p>
        <p>
          teacher minds - a website ONLY for teachers, not learning, with all my
          ideas to support teachers (teacerhs minds has class view, class timer,
          casual/sub page, bookmark manager???)
        </p>
      </div>
      <div className={styles.landingBox}>
        <BookAnimation />
      </div>
    </div>
  );
};
