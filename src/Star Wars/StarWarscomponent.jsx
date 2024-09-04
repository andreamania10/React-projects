import { useEffect, useState } from "react"
import { getPages } from './services/services';
import { Nombres, Numeros, Portada } from "./EstiloStarWars";
import { getIdFromUrl } from "./services/utils";
import { Link, useParams } from "react-router-dom";

const StarWarscomponent = () => {
  const { id } = useParams();
  const [characters, setCharacters] = useState([])
  const [enlaces, setEnlaces] = useState([])

  useEffect(() => {
    getPages(id).then(pages => {

      setCharacters(pages.data.results)
      setEnlaces(pages.result)

    })
  }, [id]);

  const Links = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div>
      <Portada>
        {characters.map((personatge, i) => {
          const idChar = getIdFromUrl(personatge.url);
          return (
            <div key={i}>
              <Link to={`/character/${idChar}`}>
                <img src={"https://starwars-visualguide.com/assets/img/characters/" + idChar + ".jpg"} alt="" />
              </Link>
              <Nombres>{personatge.name}</Nombres>

            </div>
          )
        }
        )}
      </Portada>
      <Numeros>
        {Links.map((link, i) =>
          <Link to={`/${link}`} key={i}>{link}</Link>)}
      </Numeros>
    </div>
  )
}

export default StarWarscomponent