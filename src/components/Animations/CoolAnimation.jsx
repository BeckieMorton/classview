import Lottie from "lottie-react";
import cool from "../../assets/animations/cool.json";

export const CoolAnimation = () => {
  const style = {
    height: 110,
  };

  return (
    <div>
      <Lottie animationData={cool} style={style} />
    </div>
  );
};
