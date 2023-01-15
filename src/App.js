import React, { useEffect, useState } from 'react';
import "@fontsource/syne"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile'
import SearchPage from './pages/SearchPage';
import Toolbar from './components/Toolbar';
import InputButton from './components/InputButton';

//Images 
import Coffee1 from './images/coffee4.jpg'
import Coffee2 from './images/coffee1.jpg'
import Coffee3 from './images/coffee2.jpg'
import Coffee4 from './images/coffee3.jpg'
import PeppermintMocha from './images/peppermint mocha frap.jpg'
import PumpkinSpice from './images/pumpkin spice.jpg'


function App() {

  //Set Favourites
  const [favourites, setFavourites] = useState([]);

  //Set image feed
  const [imageFeed, setImageFeed] = useState([
    {
      type: 'Coffee with Cream',
      cafe: 'El Fornet', 
      location: 'Eixample, Barcelona',
      price: '2.50',
      img: Coffee2,
      index: 1,
    },
    {
      type: 'Peppermint Mocha',
      cafe: 'Starbucks',
      location: 'Eixample, Barcelona',
      price: '4.50',
      img: PeppermintMocha,
      index: 2,
    },
    {
      type: 'Coffee with Milk',
      cafe: 'Candela Canela',
      location: 'Gracia, Barcelona',
      price: '2.50',
      img: Coffee3,
      index: 3,
    },
    {
      type: 'Coffee with Milk',
      cafe: 'Roast Club',
      location: 'Barcelona',
      price: '2',
      img: Coffee4,
      index: 4,
    },
    {
      type: 'Pumpkin Spiced Latte',
      cafe: 'Starbucks',
      location: 'Pg. de Gràcia, Barcelona',
      price: '3',
      img: PumpkinSpice,
      index: 5,
    },
    {
      type: 'Coffee with Milk',
      cafe: 'Candela Canela',
      location: 'Gracia, Barcelona',
      price: '2.50',
      img: Coffee1,
      index: 6,
    },
  ])

  //Use effect to store values in local storage
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
    localStorage.setItem('imageFeed', JSON.stringify(imageFeed));
  }, [favourites, imageFeed]);


  // Get items for favourites 
  function getItem (item) {
    setFavourites([...favourites, item])
    setTimeout(() => {
      alert("Post added to favourites!");
      }, 1000);
  }

  // Remove from favourites
  function removeFavourite(item) {
    setFavourites(favourites.filter((fav => fav !== item)));
    setTimeout(() => {
      alert("Post removed from favourites!");
      }, 1000);
  }

  //Handle file upload
  const handleUpload = (newItem) => {
    setImageFeed([newItem, ...imageFeed]);
  }

  // Delete post
   function deletePost(item) {
     let newFeed = imageFeed.filter((post) => post !== item);
     setImageFeed(newFeed);

     setTimeout(() => {
      alert("Post deleted succesfully!");
      }, 1000);
   }

  return (
   <>

   {/* <Toolbar /> */}
   
   <Router>
   <Toolbar />
   <InputButton setImageFeed={setImageFeed} imageFeed={imageFeed} handleUpload={handleUpload} />
    <Routes>
      {/* <Route path='/' element={<LoginPage/>} /> */}
      <Route path='/' element={<UserProfile imageFeed={imageFeed} getItem={getItem} favourites={favourites} removeFavourite={removeFavourite} setImageFeed={setImageFeed} handleUpload={handleUpload} deletePost={deletePost}/> } />
      <Route path='/search' element={<SearchPage/>} />
    </Routes>
  </Router>
   
   </>
  );
}

export default App;