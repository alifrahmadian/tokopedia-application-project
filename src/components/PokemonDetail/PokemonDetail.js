import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { getPokemonData } from "../PokemonList/PokemonList";

import PokemonDetailContainer from "./PokemonDetailContainer";

function PokemonDetail() {
  let params = useParams();
  let arrData = getPokemonData(parseInt(params.id, 10));

  const [pokemonData, setPokemonData] = useState({});
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonImage, setPokemonImage] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${arrData.name.toLowerCase()}`)
      .then((res) => {
        setPokemonData(res.data);
        setPokemonMoves(res.data.moves);
        setPokemonTypes(res.data.types);
        setPokemonImage(
          res.data.sprites.other["official-artwork"].front_default
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <PokemonDetailContainer
        data={pokemonData}
        arrData={arrData}
        moves={pokemonMoves}
        types={pokemonTypes}
        image={pokemonImage}
      />
    </div>
  );
}

export default PokemonDetail;
