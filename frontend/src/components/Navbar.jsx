import React from 'react';
import './Navbar.css';

function Navbar({ toggleTheme }) {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <span className="name">Hakan ÖZDEMIR</span>
        <nav>
          <ul>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#lebenslauf">Lebenslauf</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
