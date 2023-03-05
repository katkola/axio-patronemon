import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [party, setParty] = useState(null);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response=>{
                console.log("fetching");
                console.log(response.data.results);
                setParty(response.data.results);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);  

    return(
        <div>
            Pokemon
            { party.map((pokemon, index)=>{
                return(<li key={index}>{pokemon.name}</li>)
            })}
        </div>
    );

}

export default App;
