import { Footer } from "antd/es/layout/layout"
import { Link } from "react-router-dom"


const Layout = ({ children }) => {
  return (
    <div>
      <nav>

        <ul>
          <li><Link to="/read">Read</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/delete">Delete</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout