import { Link } from "react-router-dom";
import styles from "./Button.module.css";

//could use children prop here to pass text/link inside the button instead of doing this way
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
