import Lottie from "lottie-react";
import angry from "../../assets/animations/angry.json";

export const AngryAnimation = () => {
  const style = {
    height: 110,
  };

  return (
    <div>
      <Lottie animationData={angry} style={style} />
    </div>
  );
};
