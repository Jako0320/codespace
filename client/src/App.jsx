import { useState } from 'react'
import './App.css'
import Navbar from './components/Nav/Navbar';
import Home from './components/Home/Home';
import Deck from './components/Home/Slideshow/Deck'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
     <Navbar/>
       <Home/>
       <Deck/>
     {/* <Footer/> */}
    </>
  );
}


export default App;
