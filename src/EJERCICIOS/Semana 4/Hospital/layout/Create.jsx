import { useState } from "react"
import { createItem } from '../../../../app/services/people';

const Create = () => {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [fechaNacimiento, setFechaNacimiento] = useState()

  return (
    <div>
      <h1>Create</h1>

      <input type="text" onChange={(e) => setNombre(e.target.value)} />

      <input type="text" onChange={(e) => setApellido(e.target.value)} />

      <input type="date" onChange={(e) => setFechaNacimiento(e.target.value)} />

      <button onClick={() => {
        createItem({ nombre, apellido, fechaNacimiento })
      }}>Create</button>

    </div >
  )
}

export default Create