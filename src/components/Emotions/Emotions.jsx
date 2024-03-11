import React from "react";

import styles from "./Emotions.module.css";
import { HappyAnimation } from "../Animations/HappyAnimation";
import { WorriedAnimation } from "../Animations/WorriedAnimation";
import { CoolAnimation } from "../Animations/CoolAnimation";
import { TiredAnimation } from "../Animations/TiredAnimation";

export const Emotions = () => {
  return (
    <div className={styles.emotionsContainer}>
      <div className={styles.emotionsBox}>
        <p>How do you feel today?</p>
      </div>
      <div className={styles.emotionsBox}>
        <HappyAnimation />
      </div>
      <div className={styles.emotionsBox}>
        <WorriedAnimation />
      </div>
      <div className={styles.emotionsBox}>
        <TiredAnimation />
      </div>
      <div className={styles.emotionsBox}>
        <CoolAnimation />
      </div>
    </div>
  );
};
