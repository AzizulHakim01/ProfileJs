import { Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Descreption from "./components/Descreption";
import { useEffect, useState } from "react";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./reducers/userReducer";
import Update from "./components/Update";

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // Fetch user data from local storage on component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    // Dispatch an action to update the user state in Redux
    // This action should be implemented in your userReducer
    // For example, dispatch(updateUser(user));
    dispatch(updateUser(user))
  }, []);

  const user = useSelector((state) => state.user);

  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Profile />} />
      ) : (
        <Route path="/" element={<Homepage />} />
      )}
      {
        user ? <Route path="*" element={<Profile/>} /> : <Route path="*" element={<Homepage/>} />
      }
      <Route path="/login" element={<Login />} />
      <Route path="/description" element={<Descreption />} />
      {
        user && <Route path="/edit" element={<Update/>} />
      }
    </Routes>
  );
}

export default App;
