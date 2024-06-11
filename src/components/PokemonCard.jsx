import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = () => {
    return(
        <Card 
         title="Charmander"
         cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Charmander"/>}
         extra={<StarOutlined/>} //Agrega en la esquina superior derecha algo, en este caso estrella para favoritos
        >
            <Meta description='Fuego'/>

        </Card>
    );
}

export default PokemonCard;