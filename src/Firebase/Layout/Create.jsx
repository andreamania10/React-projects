import { useEffect, useState } from 'react';
import { createItem, getItems } from '../../app/services/people';


const Create = () => {
  const [userName, setUserName] = useState()
  const [items, setItems] = useState()

  useEffect(() => {
    responder()
  })

  const responder = () => getItems().then(res => setItems(res))

  return (
    <div>
      <h1>Create</h1>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <button onClick={async () => {
        await createItem({ userName })
        responder()
      }}>Create</button>

      {items?.map(person =>
        <p key={person.id}>{person.userName}</p>)}

    </div>
  )

}

export default Create;