import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Layout/Home"
import About from "../Layout/About"
import Contact from "../Layout/Contact"
import Error from "../Layout/Error"
import Layout from "../Layout/Layout"
import Product from "../Layout/Product"

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Layout>
    </BrowserRouter >
  )
}

export default Router; 