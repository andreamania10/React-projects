import { BrowserRouter, Route, Routes } from "react-router-dom"
import StarWarscomponent from "../StarWarscomponent"
import StarWarsCharacter from "./StarWarsCharacter"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StarWarscomponent />} />
        <Route path="/:id" element={<StarWarscomponent />} />
        <Route path="/character/:id" element={<StarWarsCharacter />} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router;