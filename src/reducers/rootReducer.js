import { combineReducers } from "redux-immutable";
import { pokemonsReducer } from "./pokemons";
import { uiReducer } from "./ui";

//Si se quiere agregar otro reducer solo se crea el archivo correspondiente y se llama aquí.
const rootReducer = combineReducers({
    data: pokemonsReducer,
    ui: uiReducer
});

export default rootReducer;