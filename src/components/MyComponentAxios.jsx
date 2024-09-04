import { useState } from "react";
import { useEffect } from "react";
import { getPokemon } from "../app/services/services"

const MyComponentAxios = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    getPokemon().then(pokemons => {
      setName(pokemons.data.results);
    });
  }, [])

  return (
    <div>
      {name.map(poke =>
        <p key={poke.id}>{poke.name}</p>
      )}
    </div>
  );
};

export default MyComponentAxios