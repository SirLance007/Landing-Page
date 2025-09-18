import React from 'react'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'


const router = createBrowserRouter([
  { path:'/', element:<LandingPage /> },
  { path:"/",element: (<Layout />),
    children:[
      {path:'/home', element: <Home/> },
      {path:'/about', element: <About/> },
    ]
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App