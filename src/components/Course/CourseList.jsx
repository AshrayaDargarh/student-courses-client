import React from 'react';
import Course from './Course';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const CourseList = () => {
   const coursesData=useSelector(state=>state.course.items);
  return (
    <>
    <div className="flex-1 p-10 mt-10">
    <h1 className="text-3xl font-bold mb-4">Courses List</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {coursesData.map((course)=>{
        return <Link to={`/course-details`} state={course} key={course.id}>  <Course key={course.id} course={course}/></Link>
    })}
    
    </div>
  </div>
    </>
  );
};

export default CourseList;
