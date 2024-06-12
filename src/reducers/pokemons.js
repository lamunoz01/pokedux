import { SET_LOADING, SET_POKEMONS } from "../actions/types";

//Estado Inicial
const initialState = {
  pokemons: [],
  loading: false,
};

//Reducer - función pura
export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
