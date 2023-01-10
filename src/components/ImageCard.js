import React from "react";
import Image from '../images/coffee.jpg'

const ImageCard = () => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <img className="w-full" src={Image} alt='' />
      <div className="absolute bottom-0 left-0 right-0 m-4">
        <p className="text-xs font-medium text-white">Good Coffee!</p>
      </div>
    </div>
  );
};

export default ImageCard;
