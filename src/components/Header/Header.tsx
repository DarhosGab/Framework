import React from 'react';

import { Link } from 'react-router-dom';

import frame from '../../assets/img/logo.png';

import './Header.css';

function Header() {
  return (
    <header>
      <img src={frame} alt="Framework" />
      <nav className="text-header">
        <Link to="/posts" className="enter-app">
          <p>Posts</p>
        </Link>
        <Link to="/albums" className="enter-app">
          <p>Albuns</p>
        </Link>
        <Link to="/todos" className="enter-app">
          <p>TO-DOS</p>
        </Link>
      </nav>
      <nav className="Home">
        <Link to="/" className="enter-app">
          <p>Home</p>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
