import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../layout/Home"
import Create from "../layout/Create"
import Read from "../layout/Read"
import UpdateDelete from "../layout/UpdateDelete"

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/read" element={<Read />} />
      <Route path="/update/:id" element={<UpdateDelete />} />
    </Routes>
  </BrowserRouter>

)

export default Router