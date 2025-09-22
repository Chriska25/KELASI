import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../services/api';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('secret123');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (err) {
      setError('Connexion échouée');
    }
  }

  return (
    <div style={{ maxWidth: 360, margin: '64px auto' }}>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Mot de passe</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%' }} />
        </div>
        {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

