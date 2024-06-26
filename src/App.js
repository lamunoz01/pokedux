import { useEffect } from "react";
import { Col, Spin } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import logo from "./statics/logo.svg";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";
import "./App.css";

function App() {
  //El useSelector utiliza una comparación estricta ===, pero cuando son objetos no compara los valores, si no las referencias.
  // El shallowEqual - Para evitar el re rendering indica que se comparen los valores y no solo use los valores de las referencias
  //ya que como se usa inmutabilidad, siempre serán referencias distintas(false). En este caso se evalua un objeto por eso aplica esta propiedad.
  const pokemons = useSelector(
    (state) => state.data.pokemons,
    shallowEqual
    // state.getIn(["data", "pokemons"], shallowEqual) -> Usando immutable.
  );

  //En este caso "Loading" no es necesario el shallowEqual ya que es un valor booleano que retorna true o false directamente.
  const loading = useSelector((state) => state.ui.loading);

  //state.getIn(["ui", "loading"])); -> Usando immutable.

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
