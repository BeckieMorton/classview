import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export const Button = ({ routeLocation, textGoesHere }) => {
  return (
    <div className={styles.container}>
      <Link to={`/${routeLocation}`}>
        <p>
          <span className={styles.homeLink}>{textGoesHere}</span>
        </p>
      </Link>
    </div>
  );
};
