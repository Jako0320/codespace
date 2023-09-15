import { useState } from 'react'
import './App.css'
import Navbar from './components/Nav/Navbar';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
     <Navbar/>
      <Homepage/>
     <Footer/>
    </>
  );
}


export default App;
