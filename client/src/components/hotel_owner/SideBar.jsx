import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {

    const sideBarLinks = [

        {name:"Dashboard" ,path:"/owner" ,icon:assets.dashboardIcon},
        {name:"Add Room" ,path:"/owner/add-room" ,icon:assets.addIcon},
        {name:"List Room" ,path:"/owner/list-room" ,icon:assets.listIcon}
    ]
  return (

    
    <div className='border-r-2 border-gray-400 rounded-2xl h-full'>
        {sideBarLinks.map((items,index)=>(
            <NavLink to={items.path} key={index} end='/owner' className={({isActive})=>`flex items-center py-3  px-4 md:px-8 gap-3 h-20 ' ${isActive ?"bg-emerald-800 rounded-r-2xl text-white md:w-50 hover:bg-emerald-700":"hover:bg-emerald-800 border-white hover:text-white hover:w-50"}`}>
                <img className='min-h-6 min-w-6'src={items.icon}></img>
                
                <p className='pl-3 hidden md:block'>{items.name}</p>
            </NavLink>
        ))}
    </div>
  )
}

export default SideBar