import React, { useState } from "react";

import CatchPokemonModal from "../UI/CatchPokemonModal";

import "./PokemonDetailContainer.css";

function PokemonDetailContainer(props) {
  const [showModal, setShowModal] = useState(false);
  const catchProb = Math.random() < 0.5;

  return (
    <div className="detail-container">
      <div className="detail-container-body">
        <h2 className="detail-name">{props.arrData.name}</h2>

        <div className="detail-types-container">
          <h3 className="types-title">Types</h3>
          {props.types.map((type) => {
            return (
              <p key={type.type.name} className="types">
                {type.type.name}
              </p>
            );
          })}
        </div>
        <div className="detail-desc-container">
          <h3 className="desc-title">Description</h3>
          <p className="desc">{props.arrData.desc}</p>
        </div>
        <img
          src={props.image}
          className="detail-image"
          alt={props.arrData.name}
        />

        <div className="detail-moves-container">
          <h3 className="move-title">Moves</h3>
          {props.moves.map((moves, i) => {
            return (
              <p key={moves.move.name} className="moves">
                {moves.move.name}
              </p>
            );
          })}
        </div>

        <div className="catch-button-container">
          <button
            className="catch-button"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Catch
          </button>
          {showModal ? (
            <CatchPokemonModal
              closeModal={setShowModal}
              pokemonData={props.arrData}
              catchProb={catchProb}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetailContainer;
