import { Link } from "react-router-dom";

import styles from "./ControlBar.module.css";

export const ControlBar = () => {
  return (
    <div className={styles.controlContainer}>
      <Link to="/">
        <span>Home</span>
      </Link>
    </div>
  );
};
