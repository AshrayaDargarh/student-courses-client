// TopNavbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="bg-gray-800 h-16 fixed top-0 w-full flex items-center justify-between px-4 text-white">
      {/* User Info */}
      <div className="flex items-center space-x-4">
        {/* Add user info here */}
        <p className="text-lg font-bold">User Info</p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center space-x-4">
        <NavLink
        to="/"
        >
        <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
          Dashboard
        </button>
        </NavLink>
      <NavLink
      to="/courses"
      >
       <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green">
          Courses
        </button>
      </NavLink>
      
      </div>
    </div>
  );
};

export default Navbar;
