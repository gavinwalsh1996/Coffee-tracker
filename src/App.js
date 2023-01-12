import React from 'react';
import "@fontsource/syne"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile'

function App() {

  return (
   <>
   
   <Router>
    <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/profile' element={<UserProfile/>} />
    </Routes>
  </Router>
   
   </>
  );
}

export default App;
