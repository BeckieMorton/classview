import Lottie from "lottie-react";
import other from "../../assets/animations/other.json";

export const OtherAnimation = () => {
  const style = {
    height: 150,
  };

  return (
    <div>
      <Lottie animationData={other} style={style} />
    </div>
  );
};
