import Lottie from "lottie-react";
import angel from "../../assets/animations/angel.json";

export const AngelAnimation = () => {
  const style = {
    height: 110,
  };

  return (
    <div>
      <Lottie animationData={angel} style={style} />
    </div>
  );
};
