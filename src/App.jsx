import React from 'react';
import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenid@s a Cuddly Bubbly!" />
      <ItemCount />
    </>
  );
}

export default App;