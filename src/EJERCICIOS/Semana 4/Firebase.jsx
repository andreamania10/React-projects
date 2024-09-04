import { useEffect, useState } from "react";
import { createItem, getItems, deleteItem, updateItem } from './app/services/people';


const App = () => {
  const [userName, setUserName] = useState();
  const [items, setItems] = useState();
  const [userId, setUserId] = useState()

  useEffect(() => {
    consultar()
  }, [])

  const consultar = () => getItems().then(res => setItems(res))

  return (
    <div>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <input type="text" onChange={(e) => setUserId(e.target.value)} />

      <button onClick={async () => {
        await createItem({ userName })
        consultar()
      }}>Salvar</button>

      <button onClick={async () => {
        await deleteItem(userId) //para pasar el id y borrarlo, hace falta ponerlo sin corchetes. 
        consultar()
      }}>Borrar</button>

      <button onClick={async () => {
        await updateItem(userId, { userName })
        consultar()
      }}>Update</button>

      {items?.map(person => <p key={person.id}>{person.userName}-{person.id}</p>)}
    </div>
  )
}
export default App;
