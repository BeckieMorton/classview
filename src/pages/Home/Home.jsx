import { Link } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Copyright } from "../../components/Copyright/Copyright";

import styles from "./Home.module.css";
import { Landing } from "../../components/Landing/Landing";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <Landing />
      <Footer />
      <Copyright />
    </div>
  );
};
