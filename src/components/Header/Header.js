import React from 'react';
import "./Header.css"
import logo from "../../assets/imeges/Star-Wars-Logo.png"
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="logo"/>
      </Link>
    </div>
  );
};

export default Header;