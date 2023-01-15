import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductCard = ({imageFeed, getItem, favourites, removeFavourite, deletePost}) => {



  return (
    <div className="flex flex-wrap mt-44 sm:mt-60 sm:pl-32 sm:pr-32">
      {imageFeed.length !== 0 ? (
        imageFeed.map((item, index) => ( 
          <div key={item.index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="rounded-lg shadow-md bg-neutral-900 text-white">
              <img src={item.img} alt="" className="w-full h-96 rounded-t-lg" />
              <span className='flex justify-end pr-4 pt-4 cursor-pointer' onClick={() => deletePost(item)}><DeleteIcon sx={{color: 'grey'}} /></span>
              <div className="p-4">
                  <div className='flex justify-between'>
                      <h2 className="text-lg font-medium">{item.type}</h2>
                      <h2 className="text-md font-medium text-orange-400">{item.location}</h2>
                  </div>
              <div className='flex justify-between'>
                <h3 className="text-sm font-medium">{item.cafe}</h3>
                <h3 className="text-lg font-medium cursor-pointer" onClick={() => favourites.includes(item) ? removeFavourite(item) : getItem(item)}>
                  <FavoriteIcon sx={{ stroke: favourites.includes(item) ? "yellow" : "none", strokeWidth: 1 }} className={favourites.includes(item) ? "text-red-600 text-xl" : "text-gray-600 text-xl"} />
                </h3>

              </div>
                <h3 className="text-sm font-medium text-white">€ {item.price}</h3>
              </div>
            </div>
          </div>
        ))
      ) : (
          <span className='text-white'>You have no posts.</span>

      )}
    </div>
  );
};


export default ProductCard;
