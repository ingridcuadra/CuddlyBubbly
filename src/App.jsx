import React from 'react';
import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer';
const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenid@s a Cuddly Bubbly" />
    </>
  );
}

export default App;