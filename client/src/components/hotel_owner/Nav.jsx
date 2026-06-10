import { UserButton } from '@clerk/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <div className='flex justify-between items-center pr-2 md:pr-10 top-0 shadow-2xl fixed z-100 bg-white w-full md:w-screen'>
            <NavLink to={'/'}>
               <div className='flex gap-3 items-center'>
                <img className='h-20' src='Nivaas Logo.png'></img>
                <img className='h-15' src='Nivaas Logo Text.png'></img>
            </div>
            </NavLink>
            <UserButton/>
        </div>
    </div>
  )
}

export default Nav