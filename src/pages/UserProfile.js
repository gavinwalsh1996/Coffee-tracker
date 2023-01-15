import React from 'react'
//Components
import InputButton from '../components/InputButton'
import ProductCard from '../components/ProductCard'
import ImageGrid from '../components/ImageGrid'


function userProfile({imageFeed, getItem, favourites, removeFavourite, setImageFeed, handleUpload, deletePost}) {


  return (

    <div className='bg-neutral-900'>
      <InputButton setImageFeed={setImageFeed} imageFeed={imageFeed} handleUpload={handleUpload} />
      {/* <ImageCard /> */}
      <div className='flex flex-col'>
      <ImageGrid favourites={favourites} />
      <ProductCard imageFeed={imageFeed} getItem={getItem} removeFavourite={removeFavourite} favourites={favourites} deletePost={deletePost}/>
      {/* <Toolbar /> */}
      </div>
    </div>
    
  )
}

export default userProfile