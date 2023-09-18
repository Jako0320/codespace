import "./NavbarStyles.css";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Navbar() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <li>
            <Link to="/post">
              Post History
            </Link>
          </li>
          <li>
            <Link to="/forum">
              Forum
            </Link>
          </li>
          <li>
            <Link to="/calendar">
              Calendar
            </Link>
          </li>
          <li>
            <Link to="/social">
              Social
            </Link>
          </li>
          <li>
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <Link to="/forum">
              Forum
            </Link>
          </li>
          <li>
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

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

      <nav>
        {showNavigation()}
      </nav>

        <div id="mobile" onClick={this.handleClick}>
         <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
    
      </nav>
    </>
  )
}


export default Navbar;