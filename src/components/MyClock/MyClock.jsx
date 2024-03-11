import { useState, useEffect } from "react";

import styles from "./MyClock.module.css";

export const MyClock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <p className={styles.clock}>{date.toLocaleTimeString()}</p>;
};
