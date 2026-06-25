import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="p-5 bg-blue-900 flex justify-between items-center ">
      <h2 className="text-2xl font-semibold">Media Search</h2>

      <div className="flex gap-5 text-xl items-center">
        <Link
          className="text-base font-medium active:scale-95 bg-blue-300 text-blue-950 rounded px-4 py-2"
          to="/"
        >
          Search
        </Link>
        <Link
          className="text-base font-medium active:scale-95 bg-blue-300 text-blue-950 rounded px-4 py-2"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
