import React from 'react';

import './Navbar.component.css';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Cadastro</Link></li>
        <li><Link to="/lista-livros">Lista de Livros</Link></li>
      </ul>
    </nav>
  );
}
