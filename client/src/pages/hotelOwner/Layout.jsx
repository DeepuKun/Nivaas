import React from 'react'
import Nav from '../../components/hotel_owner/Nav'
import SideBar from '../../components/hotel_owner/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Nav/>
        <div className='flex h-full mt-30'>
            <SideBar/> 
            <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
                <Outlet/>
            </div>
        </div>
          
    </div>
  )
}

export default Layout