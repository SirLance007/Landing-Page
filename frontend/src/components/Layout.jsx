import React from 'react'
import { Outlet } from 'react-router-dom'
// import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
        {/* <Navbar /> */}
        <div className='w-full h-full pt-14'>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout