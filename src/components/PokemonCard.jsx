import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import './PokemonList.css';

const PokemonCard = ({name,image}) => {
    return(
        <Card 
         title={name}
         cover={<img src={image} alt={name}/>}
         extra={<StarOutlined/>} //Agrega en la esquina superior derecha algo, en este caso estrella para favoritos
        >
            <Meta description='Fuego'/>

        </Card>
    );
}

export default PokemonCard;