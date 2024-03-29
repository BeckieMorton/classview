import { Link } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Copyright } from "../../components/Copyright/Copyright";

import styles from "./Home.module.css";
import { Landing } from "../../components/Landing/Landing";

export const Home = () => {
  return (
    <>
      <div className={styles.desktopContainer}>
        <Landing />
        <Footer />
        <Copyright />
      </div>
      <div className={styles.mobileContainer}>
        <p className={styles.mobileText}>
          Class view is created specifically for use on your desktop. Check out
          the amazing displays you can use in your classroom by opening this
          site on your computer 😄
        </p>
      </div>
    </>
  );
};
