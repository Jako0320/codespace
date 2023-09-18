import { useState } from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
// import Home from './components/Home/Home';
import Social from './components/Social/Social'
// import Deck from './components/Home/Slideshow/Deck';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Social />}/>
       {/* <Home/> */}
       {/* <Deck/> */}
      </Routes>
     {/* <Footer/> */}

    </>
  );
}


export default App;
