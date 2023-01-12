import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Button() {

  return (

    <div className="absolute top-10 right-2 flex justify-center items-center p-2 bg-pink-400 h-14 w-14 rounded-3xl">
        <AddCircleOutlineIcon className="text-black text-xl" />
    </div>
  )
}

export default Button