import { fromJS } from "immutable";
import { SET_FAVORITE, SET_POKEMONS } from "../actions/types";
//Estado inicial
const initialState = fromJS({
  pokemons: [],
});

//Función pura
export const pokemonsReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case SET_POKEMONS:
      // return { ...state, pokemons: action.payload }; Sin implementat inmutabilidad.
      return state.setIn(["pokemons"], fromJS(action.payload));
    case SET_FAVORITE:
      const currentPokemonIndex = state.get("pokemons").findIndex((pokemon) => {
        return pokemon.get("id") === action.payload.pokemonId;
      });

      if (currentPokemonIndex < 0) {
        return state;
      }

      const isFavorite = state.getIn([
        "pokemons",
        currentPokemonIndex,
        "favorite",
      ]);

      return state.setIn(
        ["pokemons", currentPokemonIndex, "favorite"],
        !isFavorite
      );
    default:
      return state;
  }
};
