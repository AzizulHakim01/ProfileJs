import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-teal-300 to-teal-700">
      <div className="w-[1152px] mx-auto flex justify-between items-center h-[10vh] ">
        <Link to={"/"} className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-pink-900 bg-clip-text text-transparent">
          ProfileJs
        </Link>
        <Link to={"https://github.com/azizulHakim01"} className="bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent font-bold text-2xl">&copy; Azizul Hakim</Link>
        <Link to={"/description"} className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent text-xl font-bold">
          Know More About This Page
        </Link>
      </div>
    </div>
  );
};

export default Footer;
