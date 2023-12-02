import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from './components/Student/Dashboard'
import Navbar from './components/Header/Navbar'
import CourseList from './components/Course/CourseList'
import CourseDetails from './components/Course/CourseDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
     <Navbar/>
     <Outlet/>
    </div>
  )
}

export default App
