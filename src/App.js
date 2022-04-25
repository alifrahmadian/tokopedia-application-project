import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import PokemonList from "./components/PokemonList/PokemonList";
import PokemonListCard from "./components/PokemonList/PokemonListCard";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import MyPokemonList from "./components/MyPokemonList/MyPokemonList";
import Navbar from "./components/UI/Navbar";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="detail/:id" element={<PokemonDetail />} />
            <Route path="/mypokemonlist" element={<MyPokemonList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
