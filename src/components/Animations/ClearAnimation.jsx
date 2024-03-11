import Lottie from "lottie-react";
import clear from "../../assets/animations/clear.json";

export const ClearAnimation = () => {
  const style = {
    height: 200,
  };

  return (
    <div>
      <Lottie animationData={clear} style={style} />
    </div>
  );
};
