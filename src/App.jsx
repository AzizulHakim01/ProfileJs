import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Descreption from "./components/Descreption"

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/description" element={<Descreption/>}/>
    </Routes>
  )
}

export default App
