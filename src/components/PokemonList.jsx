import PokemonCard from "./PokemonCard";
import './PokemonList.css'

const PokemonList = ({pokemons}) => {
    return(
        <div className="PokemonList">
            {pokemons.map((pokemons) => {
                return (
                    <PokemonCard/>
                )
            })}
        </div>
    );
};

PokemonList.defaultProps = {
    pokemons:Array(10).fill('') //Creara un arreglo de 10 posisiciones y cada posición tendra como valor '' ej ['','','','','','','','','','']
};

export default PokemonList;