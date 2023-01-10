import React, { useState } from 'react';
//Icons
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';

//Images
import Coffee from '../images/coffee.jpg'

//Function
function InputButton() {

//State
const [isDropdownVisible, setDropdownVisible] = useState(false);
const [input1, setInput1] = useState('');
const [input2, setInput2] = useState('');

  return (
    <div>
      <div className='text-right'><AddCircleOutlineIcon sx={{fontSize: 30}} className='cursor-pointer' onClick={() => setDropdownVisible(!isDropdownVisible)} /></div>
      {isDropdownVisible && (
        <div className='flex flex-col bg-gray-200 p-4 rounded-lg gap-5'>

        <h2 className='text-2xl font-medium mb-4'>Create Image</h2>

            <img className='w-full h-64 rounded-lg' src={Coffee} />

            <AddAPhotoIcon className='mb-4'/>

          <input
            className='bg-gray-100 p-2 rounded-lg mb-4'
            placeholder="Cafe Name"
            value={input1}
            onChange={e => setInput1(e.target.value)}
          />

          <input
            className='bg-gray-100 p-2 rounded-lg mb-4'
            placeholder="Location"
            value={input2}
            onChange={e => setInput2(e.target.value)}
          />

          <input
            className='bg-gray-100 p-2 rounded-lg mb-4'
            placeholder="Coffee"
            value={input2}
            onChange={e => setInput2(e.target.value)}
          />

          <input
            className='bg-gray-100 p-2 rounded-lg mb-4'
            placeholder="Price"
            value={input2}
            onChange={e => setInput2(e.target.value)}
          />
        
            <span className='text-center'>
                <button className='bg-gray-500 text-white p-2 rounded-lg mr-2'>Clear</button>
                <button className='bg-yellow-500 text-white p-2 rounded-lg'>Publish</button>
            </span>

        </div>
      )}
    </div>
  );
}

export default InputButton;

