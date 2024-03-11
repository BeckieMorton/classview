import Lottie from "lottie-react";
import tired from "../../assets/animations/tired.json";

export const TiredAnimation = () => {
  const style = {
    height: 110,
  };

  return (
    <div>
      <Lottie animationData={tired} style={style} />
    </div>
  );
};
