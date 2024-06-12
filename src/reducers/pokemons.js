import { SET_POKEMONS } from "../actions/types"

//Estado Inicial
const initialState = {
    pokemons: []
}

//Reducer - función pura
export const pokemonsReducer = (state= initialState, action) => {
    switch(action.type){
        case SET_POKEMONS:
            return {...state, pokemons: action.payload};
        default:
            return state;
    }
}