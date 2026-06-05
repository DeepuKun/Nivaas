import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useClerk, useUser, UserButton} from '@clerk/react';
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)
const NavBar = () => {

    const {openSignIn} = useClerk()
    const {user} = useUser()
    const navigate = useNavigate()
    const location = useLocation()

    const[isOpen,setOpenMenu]= useState(false);
  return (
    <div className='fixed z-999'>
        <div className='bg-white shadow-lg flex h-20 w-screen gap-5 md:gap-20 items-center justify-between'>
            <div className='flex gap-3 items-center'>
                <img className='h-20' src='Nivaas Logo.png'></img>
                <img className='h-15' src='Nivaas Logo Text.png'></img>
            </div>
            <div className='md:flex gap-5 text-[20px] hidden md:block md:w-160 justify-center '>
                <NavLink to='/'><h2 className='hover:text-emerald-700 hover:text-lg hover:font-bold transition-all duration-400'>Home</h2></NavLink>
                <NavLink to='/hotels'><h2 className='hover:text-emerald-700 hover:text-lg hover:font-bold transition-all duration-400'>Hotels</h2></NavLink>
                <NavLink to='/experience'><h2 className='hover:text-emerald-700 hover:text-lg hover:font-bold transition-all duration-400'>Experience</h2></NavLink>
                <NavLink to='/about'><h2 className='hover:text-emerald-700 hover:text-lg hover:font-bold transition-all duration-400'>About</h2></NavLink>
                {user && <NavLink to='/dashboard'><h2 className='hover:text-emerald-700 hover:text-lg hover:font-bold transition-all duration-400'>Dashboard</h2></NavLink>}
            </div>

            <div className='flex gap-2 mr-4 md:mr-10 items-center'>
                <img className=' hidden md:block md:h-8  md:w-8 bg-emerald-900  hover:bg-emerald-800 rounded-full ' src={assets.searchIcon}></img>

             {
                user ?
                <UserButton >
                    <UserButton.MenuItems>
                        <UserButton.Action label='My Bookings' labelIcon={<BookIcon/>} onClick={()=>{navigate('/my-bookings')}} />
                    </UserButton.MenuItems>
                </UserButton>
                :
                <button onClick={openSignIn} className='h-8 w-20 md:h-9  md:w-34 bg-emerald-950 rounded-full hover:bg-emerald-800 text-white'>
                Login
            </button>
             }   
             
            <div onClick={()=>{setOpenMenu(!isOpen)}} className='md:hidden flex h-7 w-7 bg-emerald-950 rounded-full text-white items-center justify-center'> <p>☰</p></div>
            </div>

        </div>
        <div   className={`  fixed top-20 h-screen w-64 bg-emerald-950 text-white transition-all duration-300 ${
    isOpen ? "right-0 p-3 pt-20 gap-36" : "-right-64"
  }`}>
    <div className='flex-col'>
                <NavLink to='/'><h2 className='hover:text-emerald-700 hover:text-2xl transition-all duration-400 p-3'>Home</h2></NavLink>
                <hr></hr>
                <NavLink to='/hotels'><h2 className='hover:text-emerald-700 hover:text-2xl transition-all duration-400 p-3'>Hotels</h2></NavLink>
                <hr></hr>
                <NavLink to='/experience'><h2 className='hover:text-emerald-700 hover:text-2xl transition-all duration-400 p-3'>Experience</h2></NavLink>
                <hr></hr>
                <NavLink to='/about'><h2 className='hover:text-emerald-700 hover:text-2xl transition-all duration-400 p-3'>About</h2></NavLink>
                <hr></hr>
                {user && <NavLink to='/dashboard'><h2 className='hover:text-emerald-700 hover:text-2xl transition-all duration-400 p-3'>Dashboard</h2></NavLink>
                }
                <hr></hr>
    </div>
        </div>

    </div>
  )
}

export default NavBar