import React from "react";
import "./HomeStyles.css";
import "./reset.css";


function Home() {
  return (
    <>
      <div className="section1">
        <img id='section1' src='/spaceBg.jpg'></img>
        <div className="greeting">Code <br></br>Today</div>
      </div>

      <div >
        <img className='gallery' src='/programmers.jpg'></img>



      </div>
      
    </>
  )
}

export default Home;