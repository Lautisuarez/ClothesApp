import './App.css';
import React, { Fragment } from "react";

// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import CarouselBS from './components/CarouselBS/CarouselBS';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <Fragment>
      
      <header>
        <div className="container">
          <a href="./index.html">
            <img src="./img/logoLetras.png" alt="Logo de Clothes App"></img>
          </a>
          <NavBar />
        </div>
      </header>

      <CarouselBS />

      <h2 className="container title">Novedades</h2>
      <div className="container items">
        <ItemListContainer />
      </div>

    </Fragment>
  );
}

export default App;
