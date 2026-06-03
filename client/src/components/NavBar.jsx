import React, { useState } from 'react'
import {assets} from '../assets/assets'
const NavBar = () => {

    const[isOpen,setOpenMenu]= useState(false);
  return (
    <div className='fixed z-999'>
        <div className='bg-white shadow-lg flex h-20 w-screen gap-5 md:gap-20 items-center'>
            <div className='flex gap-3 items-center'>
                <img className='h-20' src='Nivaas Logo.png'></img>
                <img className='h-15' src='Nivaas Logo Text.png'></img>
            </div>
            <div className='md:flex gap-5 text-[20px] hidden md:block md:w-160 justify-center '>
                <h2 className='hover:text-emerald-700 hover:text-2xl transition-all duration-400'>Home</h2>
                <h2 className='hover:text-emerald-700 hover:text-2xl transition-all duration-400'>Hotels</h2>
                <h2 className='hover:text-emerald-700 hover:text-2xl transition-all duration-400'>Experience</h2>
                <h2 className='hover:text-emerald-700 hover:text-2xl transition-all duration-400'>About</h2>
                <h2 className='hover:text-emerald-700 hover:text-2xl transition-all duration-400'>Dashboard</h2>
            </div>

            <div className='flex gap-2'>
                <img className=' hidden md:block md:h-13  md:w-13 bg-emerald-950  hover:bg-emerald-800 rounded-full ' src={assets.searchIcon}></img>
             <button className='h-10 w-20 md:h-13  md:w-34 bg-emerald-950 rounded-full hover:bg-emerald-800 text-white'>
                Login
            </button>
            <div onClick={()=>{setOpenMenu(!isOpen)}} className='md:hidden flex h-10 w-10  bg-emerald-950 rounded-full text-white items-center justify-center'> <p>☰</p></div>
            </div>

        </div>
        <div   className={`  fixed top-20 h-screen w-64 bg-emerald-950 text-white transition-all duration-300 ${
    isOpen ? "right-0 p-3 pt-20 gap-36" : "-right-64"
  }`}>
    <div className='flex-col'>
                <h2 className='text-xl p-3'>Home</h2>
                <hr></hr>
                <h2 className='text-xl p-3'>Hotels</h2>
                <hr></hr>
                <h2 className='text-xl p-3'>Experience</h2>
                <hr></hr>
                <h2 className='text-xl p-3'>About</h2>
                <hr></hr>
                <h2 className='text-xl p-3'>Dashboard</h2>
                <hr></hr>
    </div>
        </div>

    </div>
  )
}

export default NavBar