import Lottie from "lottie-react";
import book from "../../assets/animations/book.json";

import styles from "./LottieComponent.module.css";

export const LottieComponent = () => {
  const style = {
    height: 200,
  };

  return (
    <div className={styles.animationContainer}>
      <Lottie animationData={book} style={style} />
    </div>
  );
};
