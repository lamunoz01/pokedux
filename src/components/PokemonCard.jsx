import { Card } from "antd";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";
import Meta from "antd/lib/card/Meta";
import StarButton from "./StarButton";
import "./PokemonList.css";

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typeString = types.map((elem) => elem.type.name).join(", "); //Devuelve un array con los nombres de los tipos

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />} //Agrega en la esquina superior derecha algo, en este caso estrella para favoritos
    >
      <Meta description={typeString} />
    </Card>
  );
};

export default PokemonCard;
