import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import rootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { logger, capitalizePokemons } from "./middlewares/index";


//const root = ReactDOM.createRoot(document.getElementById("root"));
//const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const composedEnhacers = composeAlt(applyMiddleware(thunk, logger)); //Integrando Thunk en nuestra App.
//const store = createStore(rootReducer, composedEnhacers);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, capitalizePokemons)
}); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
