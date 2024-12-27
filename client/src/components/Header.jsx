import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo"><img src="/src/logo.png"  />
      <span>  Digital Campus</span>
      </div>
      <div className="user-info">Ankitha M Rao</div>
    </header>
  );
}

export default Header;