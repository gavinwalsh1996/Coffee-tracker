import React from 'react'
//Components
import InputButton from '../components/InputButton'
import ImageCard from '../components/ImageCard'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import ImageGrid from '../components/ImageGrid'
import Toolbar from '../components/Toolbar'



function userProfile() {

  return (

    <div className='bg-neutral-900'>
      <InputButton />
      {/* <ImageCard /> */}
      <div className='flex flex-col'>
      <ImageGrid />
      <ProductCard />
      <Toolbar />
      </div>
    </div>
    
  )
}

export default userProfile