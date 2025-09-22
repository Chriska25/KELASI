import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <header style={{ padding: 12, background: '#111827', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <nav>
        <Link to="/" style={{ color: '#fff', marginRight: 12 }}>Accueil</Link>
        <Link to="/classes" style={{ color: '#fff', marginRight: 12 }}>Classes</Link>
      </nav>
      <div>
        {isAuthenticated ? (
          <>
            <span style={{ marginRight: 12 }}>Connecté: {user?.email || 'Utilisateur'}</span>
            <button onClick={handleLogout}>Se déconnecter</button>
          </>
        ) : (
          <Link to="/login" style={{ color: '#fff' }}>Connexion</Link>
        )}
      </div>
    </header>
  );
}

