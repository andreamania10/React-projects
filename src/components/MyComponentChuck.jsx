import { useState, useEffect } from "react"
import { getCategory, getJokeFromCategory } from "../app/services/serviceChuck/apichuck"


const MyComponentChuck = () => {
  const [category, setCategory] = useState([])
  const [joke, setJoke] = useState()

  useEffect(() => {
    getCategory().then(lista => {
      setCategory(lista.data)
    })
  }, []);

  const picar = (e) => {
    e.preventDefault();
    getJokeFromCategory().then(bromas => {
      setJoke(bromas.data.value);
    })
  }

  return (
    <div>
      <ul>
        {category.map((categoria, i) =>
          <a key={i} href="#" onClick={picar}><li>{categoria}</li></a>)}
      </ul >
      <p>{joke}</p>
      <p></p>
    </div>
  )
}

export default MyComponentChuck