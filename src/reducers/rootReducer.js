import { combineReducers } from "redux";
import dataReducer from '../slices/dataSlice.js'

//Si se quiere agregar otro reducer solo se crea el archivo correspondiente y se llama aquí.
const rootReducer = combineReducers({
    data: dataReducer,
});

export default rootReducer;