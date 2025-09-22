import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/Auth/Login/index.jsx';
import PrivateRoute from './components/common/PrivateRoute.jsx';
import ClassesPage from './pages/Classes/index.jsx';
import Header from './components/common/Header/index.jsx';
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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/classes" element={<PrivateRoute><ClassesPage /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

