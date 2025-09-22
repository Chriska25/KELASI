import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function ClassesPage() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get('/classes');
        setItems(data.items || []);
      } catch (err) {
        setError('Chargement impossible.');
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Classes</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {items.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}

