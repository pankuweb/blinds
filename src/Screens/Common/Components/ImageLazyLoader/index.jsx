import Image from "next/image";

const ImageLazyLoader = (props) => {
  return <Image {...props} unoptimized />;
};
export default ImageLazyLoader;
