import './App.css';
import Contador from './contador';

function App() {
  return (
    <div className="App">
      <h1>Práctica: Manejo de Eventos en Reac</h1>
      <Contador/>
    </div>
  );
}

export default App;

/*

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Inicio from './inicio';
import AcercaDe from './acercade';
import Contacto from './contacto';
import Usuarios from './usuarios';

function App() {
  return (
    <Router>
      <nav>
        <ul className='flex justify-between m-7'>
          <li className='hover:scale-150 transition duration-300 ease-in-out'><Link to="/">Inicio</Link></li>
          <li className='hover:scale-150 transition duration-300 ease-in-out'><Link to="/about">Acerca De</Link></li>
          <li className='hover:scale-150 transition duration-300 ease-in-out'><Link to="/contacto">Contacto</Link></li>
          <li className='hover:scale-150 transition duration-300 ease-in-out'><Link to="/usuarios">Usuarios</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' exact Component={Inicio}></Route>
        <Route path='/about' Component={AcercaDe}></Route>
        <Route path='/contacto' Component={Contacto}></Route>
        <Route path='/usuarios' Component={Usuarios}></Route>
      </Routes>
    </Router>
  );
}

export default App;

*/