import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../reducers/userReducer";

const Header = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    localStorage.removeItem("user");
    setUser(false);
    navigate("/");
  };

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user]); // You might need to use [user] here if you want to trigger the effect when the user state changes

  return (
    <div className="bg-gradient-to-r from-teal-300 to-teal-700">
      <header className="flex justify-between w-[1152px] mx-auto h-[10vh] items-center">
        <Link className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-pink-900 bg-clip-text text-transparent">
          ProfileJs
        </Link>
        {user ? (
          <>
            <div
              className="flex gap-4 items-center cursor-pointer relative"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img
                className="w-8 h-8 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src="/favicon.png"
                alt="Bordered avatar"
              />
              <span className="font-bold text-white text-xl">Azizul Hakim</span>
              <div
                className={`absolute top-8 left-16 bg-white px-4 py-2 rounded-md ${
                  !showMenu && "hidden"
                } flex flex-col gap-4`}
              >
                <span className="font-semibold text-zinc-600">Dashboard</span>
                <span className="font-semibold text-zinc-600" onClick={handleLogOut}>
                  Log out
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-4 item-center">
              <Link
                to={"/login"}
                className="bg-gradient-to-r from-blue-400 to-blue-800 hover:bg-blue-700 text-white px-4 py-2 font-semibold rounded"
              >
                Log In
              </Link>
              <Link
                to={"/description"}
                className="bg-gradient-to-r from-lime-700 to-lime-400 hover:bg-green-800 text-white px-4 py-2 font-semibold rounded"
              >
                Know More
              </Link>
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default Header;
