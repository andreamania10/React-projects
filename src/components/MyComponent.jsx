import { useEffect, useState } from "react";
import { Pokemons } from "../app/api/api";

const MyComponent = () => {
  const [character, setCharacters] = useState([])
  useEffect(() => {
    Pokemons().then((pokemon) => {
      setCharacters(pokemon.results)
      console.log(pokemon, 1111)
    });
  }, []);

  return (
    <div>
      {character.map(poke =>
        <p key={poke.id}> {poke.name}</p>
      )}
    </div>
  )
}

export default MyComponent