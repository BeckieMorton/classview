import { ControlBar } from "../../components/ControlBar/ControlBar";
import styles from "./MathsDashboard.module.css";

export const MathsDashboard = () => {
  return (
    <>
      <div className={styles.mathsContainer}>
        <h3> Maths Dashboard</h3>
        <div className={styles.mathsBox}>
          <p>
            number of the day? maths quote or joke? sum of the day? shapes 2d
            3d, lines, maths word of the day?
          </p>
        </div>
      </div>
      <ControlBar />
    </>
  );
};
