import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return(
    <nav className="navbar has-shadow is-spaced" role="navigation" aria-label="main-navigation">
      <div className="container">
        {/* Brand */}
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            Just a Study Guide
          </Link>
        </div>
        {/* Menu */}
        <div className="navbar-menu is-active">
          <Link className="navbar-item" to="/">
            Lectures
          </Link>
          <Link className="navbar-item" to="/assignments">
            Assignments
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;