import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({room, index}) => {
  return (
    <NavLink to={'/hotel/'+ room._id} onClick={()=>scrollTo(0,0)} key={room._id} className="m-2 shadow-lg shadow-black/50 rounded-2xl">
        <img className=' md:h-50 md:w-80 rounded-2xl mt-5 md:mt-0' src={room.images[0]}/>
        <p className='px-3 py1 absolute top-3 left-3 bg-white text-grey-800 rounded-full'>Best Seller</p>
        <div className='p-4 pt-5'>
            <div className='flex items-center justify-between'>
                <p className='font-playfair text-2xl font-medium text-gray-800'>{room.hotel.name}</p>
                <div className='flex items-center gap-1'>
                    <img src={assets.starIconFilled}/>4.5
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <img src={assets.locationIcon}/>
                <span className='text-1xl text-gray-400'>{room.hotel.address}</span>
            </div>
            <div className='flex items-center justify-between mt-4'>
                <p><span className='text-2xl text-gray-800'>${room.pricePerNight}</span> /night</p>
                <button className='bg-emerald-900 h-10 w-25 text-white rounded-2xl hover:bg-emerald-700'>Book Now</button>
            </div>
        </div>
    </NavLink>
  )
}

export default HotelCard