import { useEffect, useState } from "react"
import { getEpisodesFromUrl, getInformation } from "../services/services"
import { useParams } from "react-router-dom"
import { Foto, PortadaCharacter } from "../HomeStyle";

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    getInformation(id).then((lista) => {
      setCharacter(lista.data)
      getEpisodesFromUrl(lista.data.episode).then((data) => {
        setEpisodes(data)
      })
    })
  }, [id])


  return (
    <PortadaCharacter>
      <div>
        <h1>Nombre: {character.name}</h1>
        <p>Gender: {character.gender}</p>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>

        <h2>Episodes:</h2>
        <ul>
          {episodes.map((capitulo, i) => {
            return <li key={i}>{capitulo.name}</li>
          })}
        </ul>
      </div>
      <Foto>
        <img src={"https://rickandmortyapi.com/api/character/avatar/" + id + ".jpeg"} width="500px" />
      </Foto>
    </PortadaCharacter>
  )
}

export default Character