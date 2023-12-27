import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-header">
        <Link to="/">
        <img className="logo-header" src="/images/RJR-Branco.png" alt="Logo" />
      </Link>
        </div>
        <h1 className="name-header">RJR Development</h1>
      </div>
      <nav>
        <Link to="/movies">Filmes</Link>
        <Link to="/objects">Objetos</Link>
        <Link to="/animals">Animais</Link>
        <Link to="/celebrities">Famosos</Link>
        <Link to="/known">Conhecidos</Link>
      </nav>
    </header>
  );
}

export default Header;
