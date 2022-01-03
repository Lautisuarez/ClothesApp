import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/CartContext/CartContext';

// VIEWS
import Home from './views/Home/Home';
import Calzado from './views/Calzado/Calzado';
import Remera from './views/Remera/Remera';
import Pantalon from './views/Pantalon/Pantalon';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './views/Cart/Cart';
import Purchase from './views/Purchase/Purchase'

function App() {
  
  return (
    <CartProvider>
      <Router>
        {/* HEADER */}
        <header>
          <div className="header container">
            <a href="/">
              <img src="https://i.postimg.cc/3wdHW7Sp/logo-Letras.png" alt="Logo de Clothes App"></img>
            </a>
            <NavBar />
          </div>
        </header>

        {/* RUTAS */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calzado" element={<Calzado />} />
          <Route path="/remera" element={<Remera />} />
          <Route path="/pantalon" element={<Pantalon />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/purchase' element={<Purchase />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
