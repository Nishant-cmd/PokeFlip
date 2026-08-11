import { useEffect, useRef, useState } from 'react';
import getData from '../api/api.js';
import Card from './cards';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0';

function shuffle(arr) {
  let shuffleArr = arr.slice();
  let i = shuffleArr.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = shuffleArr[j];
    shuffleArr[j] = shuffleArr[i];
    shuffleArr[i] = temp;
  }
  return shuffleArr;
}

export default function CardBoard({ score, setScore, bestScore, setBestScore, setGame }) {
  const [pokemonData, setPokemonData] = useState([]);
  const visitedPokemon = useRef([]);
  const randomPokemon = shuffle(pokemonData);
  useEffect(() => {
    getData(url)
      .then((res) => {
        setPokemonData(res.results);
      })
      .catch((err) => console.error(err));
  }, []);

  const onClick = (event) => {
    if (visitedPokemon.current.includes(event.currentTarget.id)) {
      setScore(0);
      setGame(true);
      visitedPokemon.current = [];
      return;
    } else if (score >= bestScore) {
      setBestScore((prev) => prev + 1);
    }
    event.preventDefault();
    visitedPokemon.current.push(event.currentTarget.id);
    setPokemonData(randomPokemon);
    setScore((prev) => prev + 1);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,200px)',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      {pokemonData.map((pokemon) => {
        return <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} onClick={onClick} />;
      })}
    </div>
  );
}
