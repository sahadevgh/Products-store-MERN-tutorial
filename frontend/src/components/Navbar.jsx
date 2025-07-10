import { PlusIcon, SunIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-8 flex items-center">
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <div>
          <Link to="/">
            <h2 className="text-black dark:text-blue-500">Product Store</h2>
          </Link>
        </div>

        <div className="flex space-x-2">
          <Link to="/create-product">
            <PlusIcon size={18} className="p-1 bg-gray-600 rounded shadow-xl" />
          </Link>

          <SunIcon size={18} className="p-1 bg-gray-600 rounded shadow-xl" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
