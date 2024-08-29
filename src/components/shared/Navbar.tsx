import React from "react";
import { CgAbstract } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="bg-black  text-white py-4 ">
      <div className="container mx-auto lg:px-6 md:px-6 px-4 flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <div className="bg-white rounded-xl w-8 h-8 p-1">
            <CgAbstract className="size-6 text-black" />
          </div>{" "}
          <h2 className="text-lg font-bold">Abstract | Help Center</h2>
        </div>

        <button className="bg-gray-800 text-white px-4 py-2 rounded">
          Submit a request
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
