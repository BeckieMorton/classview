import Lottie from "lottie-react";
import worried from "../../assets/animations/worried.json";

export const WorriedAnimation = () => {
  const style = {
    height: 110,
  };

  return (
    <div>
      <Lottie animationData={worried} style={style} />
    </div>
  );
};
