import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import GameBoard from './components/gameBoard';
import Objects from './components/objects';
import Animals from './components/animals';
import Celebrities from './components/celebrities';
import Known from './components/known';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="game-board">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route
            path="/"
            element={
              <div>
                <h2>Escolha uma Categoria</h2>
                <nav>
                  <ul>
                    <li>
                      <Link to="/movies">Filmes</Link>
                    </li>
                    <li>
                      <Link to="/objects">Objetos</Link>
                    </li>
                    <li>
                      <Link to="/animals">Animais</Link>
                    </li>
                    <li>
                      <Link to="/celebrities">Famosos</Link>
                    </li>
                    <li>
                      <Link to="/known">Conhecidos</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            }
          />
          <Route path="/movies" element={<GameBoard />} />
          <Route path="/objects" element={<Objects />} />
          <Route path="/animals" element={<Animals />} /> 
          <Route path="/celebrities" element={<Celebrities />} /> 
          <Route path="/known" element={<Known />} /> 
        
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
