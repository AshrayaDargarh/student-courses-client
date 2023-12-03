import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const student=useSelector(state=>state.student?.items[0])
  console.log(student)
  return (
    <div className="bg-gray-800 h-16 fixed top-0 w-full flex items-center justify-between px-4 text-white">
      <div className="flex items-center space-x-4">
        <p className="text-lg font-bold">{student.name}</p>
      </div>
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
