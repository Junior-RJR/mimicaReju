import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Escolha uma Categoria</h2>
      <nav>
        <ul className="category-list">
          <li>
            <Link className="category-link" to="/movies">
              Filmes
            </Link>
          </li>
          <li>
            <Link className="category-link" to="/objects">
              Objetos
            </Link>
          </li>
          <li>
            <Link className="category-link" to="/animals">
              Animais
            </Link>
          </li>
          <li>
            <Link className="category-link" to="/celebrities">
              Famosos
            </Link>
          </li>
          <li>
            <Link className="category-link" to="/known">
              Conhecidos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
