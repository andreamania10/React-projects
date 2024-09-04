import { useContext, useRef } from 'react';
import { access } from '../../../../app/people';
import { AppContext } from '../app/UserProvider';


const Home = () => {
  const name = useRef()
  const [userId, setUserId] = useContext(AppContext)
  return (
    <div>
      <p>Escribe tu nombre, por favor</p>
      <input type="text" ref={name} />
      <br />
      <output>{name.current?.value}</output>
      <p>{userId}</p>
      <button onClick={() => {
        access(name.current?.value).then(setUserId)
      }}>Acceder</button>
    </div>
  )
}

export default Home