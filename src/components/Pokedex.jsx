import { useEffect, useState } from "react";
import axios from "axios";

const Pokedex = (props) =>{
    const [party, setParty] = useState(null);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=806&offset=0')
            .then(response=>{
                console.log("fetching");
                console.log(response);
                setParty(response.data.results);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);  

    return(
        <div>
            <h1>Pokemans</h1>
            {/* { party.map((pokemon) => {
                <li>{pokemon.name}</li>
            })} */}
        </div>
    );

};
export default Pokedex;