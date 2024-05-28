import { useState } from 'react';

import './../assets/RandomPokemon.css';

export default function RandomPokemon() {
    const [pokemon, ] = useState(Math.floor(Math.random() * 151) + 1);
    
    return (
        <div className='RandomPokemon'>
            <h1 className='poke-number'>Pokemon #{pokemon}</h1>
            <img className='poke-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`} alt="Imagem de Pokémon" />
        </div>
    );
}