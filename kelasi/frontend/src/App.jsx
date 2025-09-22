import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div>
      <h1>Kelasi</h1>
      <p>Bienvenue sur Kelasi.</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Accueil</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

