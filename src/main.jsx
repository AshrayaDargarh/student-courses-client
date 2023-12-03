import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Error from './Error.jsx'
import Dashboard from './components/Student/Dashboard.jsx'
import CourseList from './components/Course/CourseList.jsx'
import CourseDetails from './components/Course/CourseDetails.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<Error/>,
  children:[
    {
      path:"",
      element:<Dashboard/>
    },
    {
      path:"/courses",
      element:<CourseList/>
    },
    {
      path:"/course-details",
      element:<CourseDetails/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
