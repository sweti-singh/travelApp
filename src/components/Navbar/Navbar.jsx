import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [active,setActive]=useState(false)
  const handleClickingMenuButton = () => {
    setActive(!active)
  };
  return (
    <header className={`navbar-container ${active ? 'active' : ''}`}>
      <div className="logo">
        <Link to={"/"}>Travel</Link>
      </div>
      <div className={`menu-btn ${active ? 'active' : ''}`} onClick={handleClickingMenuButton}>
      <div className={`navigation ${active ? 'active' : ''}`}>
        <div className={`navlinks ${active ? 'active' : ''}`} onClick={(e)=>e.stopPropagation()}>
          <Link to={"/"} className="link-style">
            About
          </Link>
          <Link to={"/"} className="link-style">
            Book
          </Link>
          <Link to={"/"} className="link-style">
            Login
          </Link>
          <Link to={"/"} className="link-style">
            Connect
          </Link>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Navbar;
