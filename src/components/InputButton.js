import React, { useState } from 'react';
//Icons
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Button from '../components/Button'

//Images
import Coffee from '../images/coffee.jpg'

//Function
function InputButton() {

//State
const [isDropdownVisible, setDropdownVisible] = useState(false);
const [input1, setInput1] = useState('');
const [input2, setInput2] = useState('')
const [input3, setInput3] = useState('')
const [input4, setInput4] = useState('')

  return (
    <div className='bg-neutral-900'>
      <span className='fixed z-50 p-4 text-white'>Logo</span>
      <div className='text-right fixed right-0 z-50'><AddCircleOutlineIcon sx={{fontSize: 35, strokeWidth: 4}} className='cursor-pointer bg-yellow-600 h-14 rounded-3xl abso p-1 m-2' onClick={() => setDropdownVisible(!isDropdownVisible)} /></div>
      {isDropdownVisible && (
        <div className='flex flex-col bg-neutral-900 p-4 rounded-lg gap-2 fixed top-0 right-0 z-40'>

        <h2 className='text-2xl font-medium mb-4 text-white'>Create Image</h2>

        <label htmlFor='image'>
          <span className='text-white text-center'>Upload Image<AddAPhotoIcon className='mb-4 text-white'/></span>
          <input type='file' name='image' id='image' style={{display: 'none'}}/>
        </label>


          <input
            className='bg-neutral-900 border p-2 rounded-lg mb-4 text-white'
            placeholder="Cafe Name"
            value={input1}
            onChange={e => setInput1(e.target.value)}
          />

          <input
            className='bg-neutral-900 border p-2 rounded-lg mb-4 text-white'
            placeholder="Location"
            value={input2}
            onChange={e => setInput2(e.target.value)}
          />

          <input
            className='bg-neutral-900 border p-2 rounded-lg mb-4 text-white'
            placeholder="Coffee"
            value={input3}
            onChange={e => setInput3(e.target.value)}
          />

          <input
            className='bg-neutral-900 border p-2 rounded-lg mb-4 text-white'
            placeholder="Price"
            value={input4}
            onChange={e => setInput4(e.target.value)}
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

