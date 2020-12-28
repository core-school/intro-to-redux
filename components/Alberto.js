import React from "react";
import { connect } from "react-redux";
import { incrementa, resta, startRequest } from "../redux/actionCreators";

const InternalCounter = ({ misVueltas, loadingPokemon, pokemon, dispatch }) => {
  const [idPokemon, setIdPokemon] = React.useState(25);
  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <p>Hola Alberto</p>
      {loadingPokemon && <p>Loading pokemon...</p>}
      {pokemon && <img src={pokemon.sprites.front_default} />}
      <p>
        has dado
        <b>{misVueltas}</b>
        <span>vueltas.</span>
      </p>
      <div style={{ marginBottom: 20 }}>
        <button
          onClick={() => {
            dispatch(incrementa(5));
          }}
        >
          ¡Date una vuelta Alberto!
        </button>
        <button
          onClick={() => {
            dispatch(resta(1));
          }}
        >
          Una vuelta menos
        </button>
      </div>
      <div>
        <input
          value={idPokemon}
          onChange={(e) => setIdPokemon(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(startRequest(idPokemon));
          }}
        >
          Carga un Pokemon
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("map");
  return {
    misVueltas: state.vueltas,
    loadingPokemon: state.loadingPokemon,
    pokemon: state.pokemon,
  };
};

export const Alberto = connect(mapStateToProps)(InternalCounter);
