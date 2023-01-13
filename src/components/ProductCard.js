import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductCard = ({images, getItem, favourites, removeFavourite}) => {



  return (
    <div className="flex flex-wrap mt-44 sm:mt-60 sm:pl-32 sm:pr-32">
      {images.map((item, index) => ( 
        <div key={item.index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="rounded-lg shadow-md bg-neutral-900 text-white">
            <img src={item.img} alt="Product Image" className="w-full h-96 rounded-t-lg" />
            <div className="p-4">
                <div className='flex justify-between'>
                    <h2 className="text-lg font-medium">{item.type}</h2>
                    <h2 className="text-lg font-medium text-yellow-400">{item.location}</h2>
                </div>
            <div className='flex justify-between'>
              <h3 className="text-lg font-medium">{item.cafe}</h3>
              <h3 className="text-lg font-medium" onClick={() => favourites.includes(item) ? removeFavourite(item) : getItem(item)}>
                <FavoriteIcon sx={{ stroke: favourites.includes(item) ? "yellow" : "none", strokeWidth: 1 }} className={favourites.includes(item) ? "text-red-600 text-xl" : "text-gray-600 text-xl"} />
              </h3>

            </div>
              
              <h3 className="text-sm font-medium text-white">{item.price}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
