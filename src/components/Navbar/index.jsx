import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/path/to/company-logo.png" alt="Company Logo" className="company-logo" />
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#">Home <i className="fa fa-angle-down"></i></a></li>
          <li className="navbar-item"><a href="#">About</a></li>
          <li className="navbar-item"><a href="#">Explore</a></li>
          <li className="navbar-item"><a href="#">Pages</a></li>
          <li className="navbar-item"><a href="#">Blog</a></li>
          <li className="navbar-item"><a href="#">Contact</a></li>
          <li className="navbar-item"><button className="navbar-button">Swap</button></li>
          <li className="navbar-item"><button className="navbar-button">Create</button></li>
          <li className="navbar-item"><img src="/path/to/profile-logo.png" alt="Profile Logo" className="profile-logo" /></li>
          <li className="navbar-item"><i className="fa fa-moon-o"></i></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
