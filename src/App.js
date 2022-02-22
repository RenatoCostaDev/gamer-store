import React from "react";
import Navbar from "./components/Navbar";
import Banners from "./components/Banners";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import banners from './data';
import pokemons from './pokemons'

function App() {
  return (
    <>
      <Navbar />
      <Banners banners={banners}/>
      <Cards pokemons={pokemons}/>
      <Footer />
    </>
  );
}

export default App;
