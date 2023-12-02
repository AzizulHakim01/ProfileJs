import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Descreption from "./components/Descreption"
import { useEffect, useState } from "react"
import Profile from "./pages/Profile"
import { useSelector } from "react-redux"

function App() {
  const user = useSelector(state => state.user)
  useEffect(()=>{
    user
  },[user])
  return (
    <Routes>
      {user ? <Route path="/profile" element={<Profile/>} /> : <Route path="/" element={<Homepage/>} />}
      <Route path="/login" element={<Login />}/>
      <Route path="/description" element={<Descreption/>}/>
    </Routes>
  )
}

export default App
