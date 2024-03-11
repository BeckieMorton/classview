import Lottie from "lottie-react";
import snow from "../../assets/animations/snow.json";

export const SnowAnimation = () => {
  const style = {
    height: 150,
  };

  return (
    <div>
      <Lottie animationData={snow} style={style} />
    </div>
  );
};
