import Image from "next/image";

const UnoptimizedImage = (props) => {
  return <Image {...props} unoptimized />;
};
export default UnoptimizedImage;
