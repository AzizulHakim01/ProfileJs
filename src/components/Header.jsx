import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState("");
  return (
    <div className="bg-gradient-to-r from-teal-300 to-teal-700">
      <header className="flex justify-between w-[1152px] mx-auto h-[10vh] items-center">
        <Link className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-pink-900 bg-clip-text text-transparent">ProfileJs</Link>
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
      </header>
    </div>
  );
};

export default Header;
