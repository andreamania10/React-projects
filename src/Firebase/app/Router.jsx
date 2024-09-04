import { BrowserRouter, Route, Routes } from "react-router-dom"
import Read from "../Layout/Read";
import Create from "../Layout/Create";
import Delete from "../Layout/Delete";
import Layout from "../Layout/Layout2"

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </Layout>
  </BrowserRouter>

)

export default Router; 