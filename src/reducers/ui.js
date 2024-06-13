import { fromJS } from "immutable";
import { SET_LOADING } from "../actions/types";
//Estado inicial
const initialState = fromJS({
  loading: false,
});

//Función pura
export const uiReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case SET_LOADING:
      return state.setIn(["loading"], action.payload);
    default:
      return state;
  }
};
