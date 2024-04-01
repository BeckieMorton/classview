import { ControlBar } from "../../components/ControlBar/ControlBar";
import styles from "./ScienceDashboard.module.css";

export const ScienceDashboard = () => {
  return (
    <>
      <div className={styles.scienceContainer}>
        <h3> Science Dashboard</h3>
        <div className={styles.scienceBox}>
          <p>
            general science? science facts? Periodic table? classification, a
            plant diagram, some diagrams? that leonardo davinci man picture?
            speace stuff? eg. where a rover is? or focus on a planet/star?
          </p>
        </div>
      </div>
      <ControlBar />
    </>
  );
};
