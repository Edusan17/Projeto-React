import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from "./paginas/login/Login";
import './App.css';
<<<<<<< HEAD
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';
import ListaTema from './componentes/temas/listatema/ListaTema';
=======
import ListaTema from './componentes/temas/listatema/ListaTema';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';
>>>>>>> 7756ec453c1d20b2a33867666f48860e8617496d

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes> 
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/cadastrousuario" element={<CadastroUsuario />} />
    <Route path="/temas" element={<ListaTema />} />
    <Route path="/posts" element={<ListaPostagem />} />
     {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
    </Routes>
    </div>
    <Footer />
=======
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/posts" element={<ListaPostagem />} />
          {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
        </Routes>
      </div>
      <Footer />
>>>>>>> 7756ec453c1d20b2a33867666f48860e8617496d
    </ BrowserRouter >

  );
}

export default App;
