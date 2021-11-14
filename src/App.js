import './App.css';
import React, { Fragment } from "react";

// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import CarouselBS from './components/CarouselBS/CarouselBS';
// Semantic ui
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <Fragment>
      <header>
        <Container>
          <a href="./index.html">
            <img src="./img/logoLetras.png" alt="Logo de Clothes App"></img>
          </a>
        </Container>
        <NavBar />
      </header>
      <CarouselBS />
    </Fragment>
  );
}

export default App;
