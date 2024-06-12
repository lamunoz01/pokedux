import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import {getPokemon} from './api';
import { setPokemons as setPokemonsActions } from "./actions";
import logo from "./statics/logo.svg";
import "./App.css";



function App({pokemons, setPokemons}) {
  console.log(pokemons);
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
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
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

//Variables necesarias para conectar nuestro componente a redux.
//Función que recibe un estado y retorna un objeto cuyas propiedades van a ser enviadas a los props del componente que se esta conectando a Redux.
const mapStateToProps = (state) =>({
  pokemons: state.pokemons
});

//Función que recibe el Dispatcher de Redux y retorna un objeto que va a ser mapeado a nuestras propiedades pero con los Actions Creator que se hbaian establecido. 
const mapDispatchToProps=(dispatch)=>({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
