import React from 'react';
import Image from '../images/coffee.jpg'
import Coffee2 from '../images/coffee2.jpg'
import Coffee3 from '../images/coffee3.jpg'
import Coffee4 from '../images/coffee4.jpg'

const ImageGrid = () => {
    return (
        <div className='fixed bg-neutral-900 w-full'>
        <p className='m-2 text-white text-center'>Favourites</p>
        <div className="flex flex- justify-center ">
            <div>
                <img src={Coffee2} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full m-2" alt="Image 1" />
                <span className='text-white flex justify-center'>Starbucks</span>
            </div>
            <div>
                <img src={Coffee3} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full m-2" alt="Image 2" />
                <span className='text-white flex justify-center'>Starbucks</span>
            </div>
            <div>
                <img src={Coffee4} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full m-2" alt="Image 3" />
                <span className='text-white flex justify-center'>Starbucks</span>
            </div>
            {/* <img 
                src={Image} 
                className="w-24 h-24 rounded-full m-2" 
                alt="Image 2" 
            />
            <img 
                src={Image}  
                className="w-24 h-24 rounded-full m-2" 
                alt="Image 3" 
            /> */}
        </div>
        </div>
    );
};
export default ImageGrid;
