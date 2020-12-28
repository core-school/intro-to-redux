import axios from "axios";

export const incrementa = (inc = 1) => ({
  type: "INCREMENT",
  howMuchToIncrement: inc,
});

export const resta = (dec = 1) => ({
  type: "INCREMENT",
  howMuchToIncrement: -dec,
});

const timeout = (x) => new Promise((resolve) => setTimeout(resolve, x));

export const startRequest = (id) => (dispatch) => {
  if (!id) {
    console.log("You must pass a pokemon id");
    return false;
  }
  if (id < 0 || id > 151) {
    console.log("Solo se pueden pedir pokemon entre el 1 y el 150");
    return false;
  }
  dispatch({
    type: "POKEMON_REQUEST",
  });
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
    console.log(res.data);
    return timeout(3000).then(() => {
      dispatch({
        type: "POKEMON_REQUEST_COMPLETED",
        data: res.data,
      });
    });
  });
};
