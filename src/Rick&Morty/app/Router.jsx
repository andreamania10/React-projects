import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Home"
import Character from "./Character"



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router