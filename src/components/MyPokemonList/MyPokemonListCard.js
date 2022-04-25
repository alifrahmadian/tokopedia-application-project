import React, { useState, useEffect } from "react";
import "../PokemonList/PokemonListCard.css";

const getDatafromLS = () => {
  const data = localStorage.getItem("myPokemonList");
  if (data != null) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const pokemonLocalStorage = JSON.parse(localStorage.getItem("pokemon"));

function MyPokemonListCard(props) {
  const [myPokemonData, setMyPokemonData] = useState(getDatafromLS());

  //   console.log(pokemonLocalStorage);

  const removeHandler = (id, pokemonId) => {
    const filtered = myPokemonData.filter((el) => {
      return id !== el.id;
    });

    setMyPokemonData(filtered);
    pokemonLocalStorage[pokemonId - 1].owned -= 1;
    localStorage.setItem("pokemon", JSON.stringify(pokemonLocalStorage));

    alert("This pokemon has been removed!");

    window.location.reload(false);
  };

  useEffect(() => {
    localStorage.setItem("myPokemonList", JSON.stringify(myPokemonData));
  }, [myPokemonData]);

  //   console.log(myPokemonData);

  return (
    <div className="card-main">
      {props.data.map((d) => {
        return (
          <div key={d.id} className="card">
            {/* {d.pokemonId} */}
            <div className="card-body">
              <div className="card-title">
                <h3>{d.name}</h3>
              </div>
              <div className="card-nickname">Nickname: {d.nickname}</div>
              <button
                onClick={() => removeHandler(d.id, d.pokemonId)}
                className="remove-card"
              >
                Remove/Release
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyPokemonListCard;
