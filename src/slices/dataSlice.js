import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "../slices/uiSlice";

const initialState = {
  pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonsRes = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: "data", //Nombre del slice
  initialState, //Estado inicial
  reducers: {
    //Solo es necesario el nombre del ActionCreator que se va a importar en nuestros componentes
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
      //Ej de sintaxis que usa reduxToolkit para nombrar los types
      // 'nameSlice/nameActionCreator' -> Ej. 'data/setPokemons'
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;

        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

//Exportamos actions desestructurados del pokemonSlice en su propiedad action
export const { setFavorite, setPokemons } = dataSlice.actions;
console.log(dataSlice);

//Exportamos los reducers
export default dataSlice.reducer;
