import Lottie from "lottie-react";
import thunderstorm from "../../assets/animations/thunderstorm.json";

export const ThunderstormAnimation = () => {
  const style = {
    height: 150,
  };

  return (
    <div>
      <Lottie animationData={thunderstorm} style={style} />
    </div>
  );
};
