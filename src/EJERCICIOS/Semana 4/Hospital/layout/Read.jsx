import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getItems } from "../../../../app/services/people";

const Read = () => {
  const [items, setItems] = useState();

  const consulta = () => getItems().then(res => setItems(res))

  useEffect(() => {
    consulta()
  }, [])

  return (
    <div>

      <h1>Read</h1>
      <table border="1px">
        <thead style={{ fontWeight: 'bold' }}>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>surname</th>
            <th>date</th>
          </tr>
          {items?.map(item =>
            <tr key={item.id}>
              <th><Link to={`/update/${item.id}`}>{item.id}</Link></th>
              <th>{item.nombre}</th>
              <th>{item.apellido}</th>
              <th>{item.fechaNacimiento}</th>
            </tr>)
          }
        </thead>
      </table>
    </div >
  )
}

export default Read