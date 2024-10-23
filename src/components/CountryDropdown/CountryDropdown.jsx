import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
const CountryDropdown = () => {
  return (
    <>
      <div className="dropdown relative inline-block text-left">
        {/* Button để mở dropdown */}
        <Button className="flex justify-between items-center w-[170px] px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none">
          <span className="flex-grow text-left">Selection</span>
          <FaAngleDown />
        </Button>
      </div>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="w-[417px] h-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col">
          {/* Ô tìm kiếm */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          />
          <div
            className="py-1 flex-grow overflow-y-auto"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 3
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 4
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem" 
            >
              Option 5
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDropdown;
