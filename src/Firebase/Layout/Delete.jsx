import { useState, useEffect } from 'react';
import { deleteItem, getItems } from '../../app/services/people';

const Delete = () => {
  const [userId, setUserId] = useState();
  const [items, setItems] = useState();

  useEffect(() => {
    responder()
  })

  const responder = () => getItems().then(res => setItems(res))

  return (
    <div>
      <h1>Delete</h1>
      <input type="text" onChange={(e) => setUserId(e.target.value)} />

      <button onClick={async () => {
        await deleteItem(userId)
        responder()
      }}>Delete</button>

      {items?.map(person =>
        <p key={person.id}>{person.userName}-{person.id}</p>)}
    </div>
  )
}

export default Delete;