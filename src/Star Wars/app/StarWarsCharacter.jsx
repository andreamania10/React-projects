import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { films, getInformation } from "../services/services";
import { Foto, PortadaCharacter, Row } from "../EstiloStarWars";
import { getIdFromUrl } from '../services/utils';

const StarWarsCharacter = () => {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState({})
  const [film, setFilm] = useState([])

  useEffect(() => {
    getInformation(id).then((lista) => {
      setPersonaje(lista.data)
      films(lista.data.films).then((peli) => {
        setFilm(peli)
      }) //recuperar el array y ponerle las url.
    })
  }, [id]);
  console.log(personaje)
  return (
    <Row>
      <PortadaCharacter>
        <h1>Nombre: {personaje.name}</h1>
        <p>Height: {personaje.height}</p>
        <p>Gender: {personaje.gender}</p>
        <p>Hair color: {personaje.hair_color}</p>
        <p>Skin color: {personaje.skin_color}</p>
        <h2> Films </h2>

        <ul>
          {film.map((pelicula, i) => {
            return <li key={i}>{pelicula.title}</li>
          })}
        </ul>
        <h2> Species </h2>
      </PortadaCharacter>
      <Foto>
        <img src={" https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"} alt="" />
      </Foto>
    </Row>
  )
}

export default StarWarsCharacter