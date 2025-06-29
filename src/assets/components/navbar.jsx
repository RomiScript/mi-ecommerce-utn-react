import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#333', color: '#fff', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link></li>
        <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link></li>
        <li><Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Registro</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
