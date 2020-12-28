import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  vueltas: 0,
  loadingPokemon: false,
  pokemon: null,
};

const reducer = (state = initialState, action) => {
  console.log("REDUCER CALL");
  console.log(action, state);

  let newState = {};
  switch (action.type) {
    case "INCREMENT":
      newState = {
        ...state,
        vueltas: state.vueltas + action.howMuchToIncrement,
      };
      break;
    case "POKEMON_REQUEST":
      newState = {
        ...state,
        loadingPokemon: true,
        pokemon: null,
      };
      break;
    case "POKEMON_REQUEST_COMPLETED":
      newState = {
        ...state,
        loadingPokemon: false,
        pokemon: action.data,
      };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
