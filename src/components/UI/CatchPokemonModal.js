import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import "./CatchPokemonModal.css";

const getDatafromLS = () => {
  const data = localStorage.getItem("myPokemonList");
  if (data != null) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function CatchPokemonModal({ catchProb, closeModal, pokemonData }) {
  const [myPokemonList, setMyPokemonList] = useState(getDatafromLS());
  const [nickname, setNickname] = useState("");

  const pokemonLS = JSON.parse(localStorage.getItem("pokemon"));

  //   console.log(
  //     myPokemonList.find((data) => {
  //       return data.id === pokemonData.id;
  //     })
  //   );

  const checkNicknameIsUsed = (nickname) => {
    let isUsed = false;

    const checkNickName = myPokemonList.find((el) => {
      return el.nickname === nickname;
    });

    if (checkNickName == null) {
      isUsed = false;
    } else if (checkNickName != null) {
      isUsed = true;
    }

    return isUsed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      id: myPokemonList.length + 1,
      pokemonId: pokemonData.id,
      name: pokemonData.name,
      nickname,
    };

    let checkNickName = checkNicknameIsUsed(nickname);

    if (checkNickName == false) {
      setMyPokemonList([...myPokemonList, newData]);

      pokemonLS[pokemonData.id - 1].owned += 1;
      localStorage.setItem("pokemon", JSON.stringify(pokemonLS));

      alert(
        `This Pokemon, nickname ${newData.nickname} has been added to the list!`
      );
    } else if (checkNickName === true) {
      alert("This nickname has been used");
    }

    window.location.reload(false);
  };

  useEffect(() => {
    localStorage.setItem("myPokemonList", JSON.stringify(myPokemonList));
  }, [myPokemonList]);

  return (
    <div className="catch-modal-background">
      <div className="catch-modal-container">
        {catchProb === false ? (
          <div className="catch-modal-body">
            <div className="catch-modal-title">
              Ouch! You've failed to catch this Pokemon. Try again later!
            </div>
            <div className="catch-modal-footer">
              <button
                className="catch-close-button"
                onClick={() => {
                  closeModal(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form className="catch-modal-body" onSubmit={handleSubmit}>
            <div className="catch-modal-title">
              You've successfully catch this Pokemon! Please give it a nickname
            </div>
            <div className="catch-modal-content-body">
              <input
                className="catch-input"
                placeholder="Insert your Pokemon nickname here"
                name="nickname"
                required="required"
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <div className="catch-modal-footer">
              <button className="catch-close-button">Save</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default CatchPokemonModal;
