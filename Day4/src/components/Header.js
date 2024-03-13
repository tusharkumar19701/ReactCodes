import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (
      <div className="header">
        <a href="/">
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTweev2cNZCgecH7BJbsS2WxVkVCOWIDj6M3Q&usqp=CAU"
            alt="logo"
            />
        </a>
        <ul className="nav-items">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
        <div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)} >Logout</button>
        ):
        <button onClick={() => setIsLoggedIn(true)} >Login</button>}
        </div>
      </div>
    );
  };

  export default Header;