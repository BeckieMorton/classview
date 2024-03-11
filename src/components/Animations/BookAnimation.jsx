import Lottie from "lottie-react";
import book from "../../assets/animations/book.json";

export const BookAnimation = () => {
  const style = {
    height: 200,
  };

  return (
    <div>
      <Lottie animationData={book} style={style} />
    </div>
  );
};
