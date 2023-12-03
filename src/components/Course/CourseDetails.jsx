import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const CourseDetails = () => {
  const [expandedWeek, setExpandedWeek] = useState(null);
  const {state}=useLocation();
  const { thumbnail, name, instructor, description, enrollmentStatus, duration, schedule, location, prerequisites, syllabus } = state;

  return (
    <div className="flex items-center justify-center mx-auto mt-16 bg-gray-200">
      <div className="bg-white p-8 rounded-md shadow-lg w-full ">
        <div className="mb-6">
          <img src={thumbnail} alt={name} className="w-full h-60 object-cover mb-4 rounded-md" />
          <hr />
          <h2 className="text-3xl font-bold mb-2">{name}</h2>
          <hr />
          <p className="text-lg mb-2 text-gray-700">Instructor: {instructor}</p>
          <p className="text-gray-800">{description}</p>
        </div>
        <hr />
        <div className="mb-6 mt-2">
          <h3 className="text-xl font-bold mb-2">Course Details</h3>
          <hr />
          <p className="text-gray-700">Status: {enrollmentStatus}</p>
          <p className="text-gray-700">Duration: {duration}</p>
          <p className="text-gray-700">Schedule: {schedule}</p>
          <p className="text-gray-700">Location: {location}</p>
          <p className="text-gray-700">Prerequisites: {prerequisites.join(', ')}</p>
        </div>
            <hr />
        <div className='mt-2'>
          <h3 className="text-xl font-bold mb-2">Syllabus</h3>
          <hr />
          {syllabus.map((item) => (
            <div key={item.week} className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpandedWeek(expandedWeek === item.week ? null : item.week)}
              >
                <p className="text-lg font-bold mb-2">Week {item.week}</p>
                <span>{expandedWeek === item.week ? '▲' : '▼'}</span>
              </div>
              {expandedWeek === item.week && (
                <div className="text-gray-700">
                  <p>{item.topic}</p>
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;


