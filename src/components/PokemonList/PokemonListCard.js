import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./PokemonListCard.css";

function PokemonListCard(props) {
  return (
    <div className="card-main">
      {props.pokemonArr.map((pokemon) => {
        return (
          <div key={pokemon.id} className="card">
            <div className="card-body">
              <Link to={`/detail/${pokemon.id}`} className="card-title">
                <h3>{pokemon.name}</h3>
              </Link>
              <div className="card-owned">
                <div className="owned-tag">Owned</div>
                <div className="owned-count">
                  <b>{pokemon.owned}</b>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Outlet />
    </div>
  );
}

export default PokemonListCard;
