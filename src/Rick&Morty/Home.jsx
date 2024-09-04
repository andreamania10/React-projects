import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getPages } from "./services/services"
import { Portada } from "./HomeStyle"


const Home = () => {
  const { id } = useParams()
  const [characters, setCharacters] = useState([])
  const [enlaces, setEnlaces] = useState([])

  useEffect(() => {
    getPages(id).then(pages => {
      setCharacters(pages.data.results)
      setEnlaces(pages.data.info.count)
    }
    )
  })


  return (
    <div>
      <Portada>
        {characters?.map((personaje, i) => {
          return (
            <div key={i}>

              <Link to={`/character/${personaje.id}`}>
                <img src={"https://rickandmortyapi.com/api/character/avatar/" + personaje.id + ".jpeg"} alt="" />
              </Link>
              <br />
              {personaje.name}

            </div>
          )
        })}
      </Portada>
    </div>
  )
}

export default Home