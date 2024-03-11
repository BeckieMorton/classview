import Lottie from "lottie-react";
import rain from "../../assets/animations/rain.json";

export const RainAnimation = () => {
  const style = {
    height: 150,
  };

  return (
    <div>
      <Lottie animationData={rain} style={style} />
    </div>
  );
};
