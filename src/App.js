import React, { useEffect, useState } from 'react';
import "@fontsource/syne"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile'

//Images 
import Coffee1 from './images/coffee.jpg'
import Coffee2 from './images/coffee1.jpg'
import Coffee3 from './images/coffee2.jpg'
import Coffee4 from './images/coffee3.jpg'

const images = [
  {
    type: 'peppermint Latte',
    cafe: 'Starbucks',
    location: 'Barcelona',
    price: '$3',
    img: Coffee1,
    index: 1,
  },
  {
    type: 'peppermint Latte',
    cafe: '365',
    location: 'Barcelona',
    price: '$3.50',
    img: Coffee2,
    index: 2,
  },
  {
    type: 'peppermint Latte',
    cafe: 'Roast Club',
    location: 'Barcelona',
    price: '$2.50',
    img: Coffee3,
    index: 3,
  },
  {
    type: 'peppermint Latte',
    cafe: 'Nomad',
    location: 'Barcelona',
    price: '$2',
    img: Coffee4,
    index: 4,
  },
]


function App() {

  //set Favourites
  const [favourites, setFavourites] = useState([]);

  // Get items for favourites 
  function getItem (item) {
    setFavourites([...favourites, item])
  }

  return (
   <>
   
   <Router>
    <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/profile' element={<UserProfile images={images} getItem={getItem} favourites={favourites} /> } />
    </Routes>
  </Router>
   
   </>
  );
}

export default App;