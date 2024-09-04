import { useEffect, useState } from "react";
import { getItems } from '../../app/services/people';


const Read = () => {

  const [item, setItem] = useState();

  useEffect(() => {
    responder()
  })

  const responder = () => getItems().then(res => setItem(res))

  return (
    <div>
      <h1>Read</h1>
      {item?.map(person => <p key={person.id}>{person.userName}</p>)}
    </div>
  )

}


export default Read;