import React from 'react'
//Components
import InputButton from '../components/InputButton'
import ImageCard from '../components/ImageCard'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import ImageGrid from '../components/ImageGrid'
import Toolbar from '../components/Toolbar'




function userProfile({imageFeed, getItem, favourites, removeFavourite, setImageFeed, handleUpload}) {


  return (

    <div className='bg-neutral-900'>
      <InputButton setImageFeed={setImageFeed} imageFeed={imageFeed} handleUpload={handleUpload} />
      {/* <ImageCard /> */}
      <div className='flex flex-col'>
      <ImageGrid favourites={favourites} />
      <ProductCard imageFeed={imageFeed} getItem={getItem} removeFavourite={removeFavourite} favourites={favourites}/>
      <Toolbar />
      </div>
    </div>
    
  )
}

export default userProfile