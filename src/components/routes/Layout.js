import React from 'react';
import Logo from '../assets/images/Logo.jpg';

const Layout = () => {
  return (
    <div className="Header" id="home">
      <nav className="navbar navbar-expand-lg navbar-light bg-light container m">
      <a href="/" className="navbar-brand">
          MUSCLE<span>TRAINER</span>
          <img className="mtlogo" src={Logo} alt="" /></a>
      
      <ul className="navbar-nav ml-auto">
  <li className="nav-item"><a href="/" className="btn1 btn-primary nav-button">Home</a></li>
  <li className="nav-item"><a href="/admin" className="btn1 btn-primary nav-button">Admin</a></li>
  <li className="nav-item"><a href="/login" className="btn1 btn-primary nav-button">Login</a></li><li>
  <a href="/signup" className="btn1 btn-primary nav-button">Sign Up</a></li>
      </ul>
      </nav>
      </div>
  );
};

export default Layout;
