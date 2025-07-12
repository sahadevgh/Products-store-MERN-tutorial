import { PlusIcon, SunIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  return (
    <div className="w-full p-4 flex items-center">
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <div>
          <Link to="/">
            <h2 className="">Product Store</h2>
          </Link>
        </div>

        <div className="flex space-x-2">
          <Link to="/create-product">
            <PlusIcon size={24} className="p-1 bg-gray-600 rounded shadow-xl" />
          </Link>

          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
