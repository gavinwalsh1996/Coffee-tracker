import React from 'react';
import Image from '../images/coffee.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';

import Coffee1 from '../images/coffee1.jpg'
import Coffee2 from '../images/coffee2.jpg'
import Coffee3 from '../images/coffee3.jpg'
import Coffee4 from '../images/coffee4.jpg'

const ProductCard = () => {
  const items = [
    {
      id: 1,
      name: 'Peppermint Latte',
      price: '$20',
      image: Coffee1,
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$25',
      image: Coffee2,
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$30',
      image: Coffee3,
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$30',
      image: Coffee4,
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$30',
      image: Image,
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$30',
      image: Image,
    },
  ];

  return (
    <div className="flex flex-wrap mt-44 sm:mt-60 sm:pl-32 sm:pr-32">
      {items.map((item) => (
        <div key={item.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="rounded-lg shadow-md bg-neutral-900 text-white">
            <img src={item.image} alt="Product Image" className="w-full h-96 rounded-t-lg" />
            <div className="p-4">
                <div className='flex justify-between'>
                    <h2 className="text-lg font-medium">{item.name}</h2>
                    <h2 className="text-lg font-medium text-yellow-400">Barcelona</h2>
                </div>
            <div className='flex justify-between'>
              <h3 className="text-lg font-medium">Starbucks</h3>
              <h3 className="text-lg font-medium"><FavoriteIcon sx={{ stroke: "yellow", strokeWidth: 1 }} className="text-red-600 text-xl" /></h3>
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
