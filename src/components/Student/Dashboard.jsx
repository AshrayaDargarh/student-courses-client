import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { completeCourse } from './studentSlice';
const Dashboard = () => {
    const student=useSelector(state=>state.student.items[0]);
    const dispatch=useDispatch();
  return (
    <div className="flex-1 p-10 mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center text-slate-600">Welcome to Dashboard {student?.name}</h1>
      <h1 className="text-3xl font-bold mb-4 uppercase text-slate-700">Enrolled Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {student.enrolledCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded shadow p-4 hover:shadow-lg transition duration-300"
          >
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-32 object-cover mb-4"
            />
            <hr />
            <p className="text-xl font-bold mb-2">{course.name}</p>
            
            <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
            <p className="text-gray-600 mb-2">Due Date: {course?.dueDate}</p>
            <div className="flex items-center mb-2">
              <div className="w-full bg-gray-200 rounded-full">
                <div
                  className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full"
                  style={{ width: `${course?.progress}%` }}
                >
                  {course?.progress}%
                </div>
              </div>
            </div>
            {!course?.completed && (
              <button className="bg-green-500 text-white py-2 px-4 rounded-full" onClick={()=>{dispatch(completeCourse(course))}}>
                Mark as Completed
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
