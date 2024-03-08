import styles from "./Copyright.module.css";

export const Copyright = () => {
  return (
    <div className={styles.container}>
      <p>
        © 2024 Webseite von
        <a href="https://beckiemorton-portfolio.netlify.app/"> B.M.</a>
      </p>
    </div>
  );
};
