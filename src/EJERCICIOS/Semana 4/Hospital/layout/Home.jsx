import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to="/create">Create</Link></li>
        <li><Link to="/read">Read</Link></li>
      </ul>
    </div>
  )
}

export default Home