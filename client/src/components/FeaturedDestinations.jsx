import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import { NavLink } from 'react-router-dom'

const FeaturedDestinations = () => {
  return (
    <div  data-aos="fade-up">
        <h1 className='font-playfair-display font-bold text-6xl mt-70 md:mt-30 pl-5 md:pl-10'>Featured <span className='text-emerald-900 font-playfair-display'>Destinations</span></h1>
        <h2 className='text-2xl text-gray-400 mt-5 pl-5 md:pl-10'>Discover handpicked stays across the most beautiful destinations.</h2>
        <div className=' md:flex md:gap-2 md:mt-10 m-5 '>
            
            {roomsDummyData.slice(0,4).map((room, index)=>(
                <HotelCard key={room._id} room={room} index={index}/>
            ))}
        </div>
        <div className='flex w-screen items-center justify-center h-20'>
           <NavLink to='/rooms'><button className='shadow-2xs shadow-black h-10 w-60 bg-emerald-900 text-white rounded-2xl hover:bg-emerald-700'>View All</button></NavLink> 
        </div>
        
    </div>
  )
}

export default FeaturedDestinations