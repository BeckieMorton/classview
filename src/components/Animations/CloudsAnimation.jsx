import Lottie from "lottie-react";
import clouds from "../../assets/animations/clouds.json";

export const CloudsAnimation = () => {
  const style = {
    height: 200,
  };

  return (
    <div>
      <Lottie animationData={clouds} style={style} />
    </div>
  );
};
