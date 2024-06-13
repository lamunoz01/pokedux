import { useEffect } from "react";
import { Col, Spin } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { getPokemon } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import logo from "./statics/logo.svg";
import "./App.css";

function App() {
  //El useSelector utiliza una comparación estricta ===, pero cuando son objetos no compara los valores, si no las referencias.
  // El shallowEqual - Para evitar el re rendering indica que se comparen los valores y no solo use los valores de las referencias 
  //ya que como se usa inmutabilidad, siempre serán referencias distintas(false). En este caso se evalua un objeto por eso aplica esta propiedad.
  const pokemons = useSelector((state) =>
    state.getIn(["data", "pokemons"], shallowEqual)
  ).toJS();

  //En este caso "Loading" no es necesario el shallowEqual ya que es un valor booleano que retorna true o false directamente.
  const loading = useSelector((state) => state.getIn(["ui", "loading"]));

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };

    fetchPokemons();
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
