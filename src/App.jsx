import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Header/Navbar'

function App() {
  return (
    <div className='flex'>
     <Navbar/>
     <Outlet/>
    </div>
  )
}

export default App
