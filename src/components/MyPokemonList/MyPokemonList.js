import React from "react";

import MyPokemonListCard from "./MyPokemonListCard";

const myPokemon = JSON.parse(localStorage.getItem("myPokemonList"));

function MyPokemonList() {
  return (
    <div>
      <h2>My Pokemon List</h2>
      <MyPokemonListCard data={myPokemon} />
    </div>
  );
}

export default MyPokemonList;
