import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <Link to="/">
          <h1>NotHoot</h1>
        </Link>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/game">Games</Link>
          <Link to="/login">Log In</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
