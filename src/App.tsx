import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home/home.page';
import { ListaLivros } from './pages/ListaLivros/ListaLivros.page';
import LoginPage from './pages/Login/Login.page';
import { CadastroPage } from './components';
import firebaseConfig from './firebaseConfig';
import { initializeApp } from "firebase/app";

export const app = initializeApp(firebaseConfig) ;
function App() {
  return (
    <Router>
      <Routes >
        <Route path= "/" element= { <Home />} />
        <Route path= "/lista-livros" element= { <ListaLivros></ListaLivros>} />
        <Route path='/login' element= {<LoginPage />} />
        <Route path='/register' element={<CadastroPage />} />
      </ Routes>
    </Router>
  );
}

export default App;
