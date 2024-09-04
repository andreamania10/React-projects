import { Footer } from "antd/es/layout/layout"
import { Link } from "react-router-dom"

const Layout = ({ children }) => (
  <div>
    <nav>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
      </ul>
      <main>{children}</main>
    </nav>
    <Footer />
  </div>

)

export default Layout