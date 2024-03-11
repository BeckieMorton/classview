import Lottie from "lottie-react";
import happy from "../../assets/animations/happy.json";

export const HappyAnimation = () => {
  const style = {
    height: 110,
  };

  return (
    <div>
      <Lottie animationData={happy} style={style} />
    </div>
  );
};
