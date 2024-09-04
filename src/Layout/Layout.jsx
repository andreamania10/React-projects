import { Link } from 'react-router-dom';
import { Footer } from 'antd/es/layout/layout';


const Layout = ({ children }) => (
  <div>
    <nav>
      <main>{children}</main>
      <ul>
        <li><Link to="/about">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/product/1">Producto 1</Link></li>
      </ul>

    </nav>
    <Footer />
  </div>
)

export default Layout;