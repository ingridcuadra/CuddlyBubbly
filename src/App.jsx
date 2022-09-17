import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <>
      <Navbar />
      {/* <ItemListContainer greeting="¡Bienvenid@s a Cuddly Bubbly!" /> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;