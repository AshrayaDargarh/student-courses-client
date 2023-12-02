import React from 'react'

const Course = ({course}) => {
  return (

      <>
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
        </div>
        </>
  )
}

export default Course