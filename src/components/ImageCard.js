import React from "react";
import Image from '../images/coffee.jpg'

//Icons 
import PushPinIcon from '@mui/icons-material/PushPin';
import FavoriteIcon from '@mui/icons-material/Favorite';

const   ImageCard = ({ imageUrl, caption }) => {

  return (

    <div className="relative rounded-lg overflow-hidden">

        <img className="rounded-2xl" src={Image} alt='' />

        <div className="absolute top-10 right-2 flex justify-center items-center p-2 bg-white rounded-3xl">
            <FavoriteIcon sx={{ stroke: "red", strokeWidth: 1 }} className="text-white text-xl" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-neutral-900 flex flex-col gap-2 p-4">

            <div className="flex justify-between">
                <p className="text-3xl font-medium text-white">Peppermint Late</p>
                <p className="text-lg font-medium text-yellow-400"><PushPinIcon/>Barcelona</p>
            </div>

            <div className="flex justify-between">
                <p className="text-2xl font-medium text-white">Starbucks</p>
                <p className="text-lg font-medium text-white">$3.00</p>
            </div>

            <div className="flex justify-end gap-2">
                <button className="text-white">Edit</button>
                <button className="text-white">Delete</button>
            </div>

        </div>
  </div>

  );
};

export default ImageCard;
