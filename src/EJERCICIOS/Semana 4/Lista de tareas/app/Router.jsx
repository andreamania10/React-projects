import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Layout/Home"
import Tasks from "../Layout/Tasks"
import Layout from "../Layout/Layout"

const Router = () => {
  return (
    <BrowserRouter>
      <Layout >
        <Routes>
          <Route index element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router