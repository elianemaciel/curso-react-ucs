import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home/home.page';
import { ListaLivros } from './pages/ListaLivros/ListaLivros.page';
import Livro from './interfaces/livro.interface';

function App() {
  const livros: Array<Livro> = [{
    id: "1",
    titulo: "React: aprenda praticando",
    autor: "Mauricio Maujor Samy Silva"
  }]

  return (
    <Router>
      <Routes >
        <Route path= "/" element= { <Home />} />
        <Route path= "/lista-livros" element= { <ListaLivros livros={[]}></ListaLivros>} />
      </ Routes>
    </Router>
  );
}

export default App;
