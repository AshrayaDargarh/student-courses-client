// App.js
import React from 'react';
const coursesData = [
  {
    id: 1,
    name: 'Introduction to React',
    instructor: 'John Doe',
    thumbnail: 'https://via.placeholder.com/150',
    dueDate: '2023-12-15',
    progress: 60,
    completed: false,
  },
  // Add more courses as needed
];

const Dashboard = () => {
  return (
    <div className="flex-1 p-10 mt-10">
      <h1 className="text-3xl font-bold mb-4">My Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded shadow p-4 hover:shadow-lg transition duration-300"
          >
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-32 object-cover mb-4"
            />
            <p className="text-xl font-bold mb-2">{course.name}</p>
            <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
            <p className="text-gray-600 mb-2">Due Date: {course.dueDate}</p>
            <div className="flex items-center mb-2">
              <div className="w-full bg-gray-200 rounded-full">
                <div
                  className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full"
                  style={{ width: `${course.progress}%` }}
                >
                  {course.progress}%
                </div>
              </div>
            </div>
            {!course.completed && (
              <button className="bg-green-500 text-white py-2 px-4 rounded-full">
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
