import { Component } from 'react';
import "./NavbarStyles.css";


class Navbar extends Component {
  state={clicked: false};
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render(){
  return(
    <>
      <nav>
       <a href='index.html'>
          <img src="/galaxy.png" id='navLogo'></img>
       </a>
      <div>
        <h1 id='companyName'>
          codespace
        </h1>
      </div>

        <div>
          <ul id="navbar" className={this.state.clicked ? '#navbar active' : "#navbar"}>
            <li>
              <a className='active' href='index.html'>Home</a>
            </li>
            <li>
              <a href='index.html'>Calendar</a>
            </li>
            <li> 
              <a href='index.html'>Forum</a> 
            </li>
            <li> 
              <a href='index.html'>Donate</a>
            </li>
            <li>  
              <a href='index.html'>Login/Signup</a>
            </li> 
          </ul>
        </div>

        <div id="mobile" onClick={this.handleClick}>
         <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
    
      </nav>
    </>
  )
}
}


export default Navbar;