import React from 'react'
import { roomsDummyData } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const AllHotels = () => {
  return (
    <div className='pt-2 flex'>
        <div className='md:w-[70vw]'> 
         <h1 className='font-playfair-display font-bold text-6xl mt-20 md:mt-30 pl-5 md:pl-10'>All <span className='text-emerald-900 font-playfair-display'>Rooms</span></h1>
        <h2 className='text-2xl text-gray-400 mt-5 pl-5 md:pl-10'>Explore all available stays and find your perfect room.</h2>
         
        <div>
            {roomsDummyData.map((room)=>(
              <NavLink to={`/rooms/${room._id}`} onClick={scrollTo(0,0)}  data-aos="fade-up">
                 <div className=' m-2 md:m-10'>
                    
                    <img className=' rounded-2xl h-60 w-100 ' src={room.images[0]}></img>
                    <div className='flex justify-between w-100'>
                    <div>
                    <p className='text-3xl font-playfair font-bold'>{room.hotel.name}</p>
                    <p className='text-xl text-gray-700'>{room.hotel.city}</p>
                    <p className='text-gray-400'>{room.hotel.address}</p>
                    </div>
                    <div>
                        <p className='font-playfair text-2xl'>4.3<span className='text-[15px]'> ⭐⭐⭐⭐</span></p>
                        <br></br>
                        <button className='bg-emerald-900 text-white h-8 rounded-lg m-1 p-1 hover:bg-emerald-700'>View Details</button>
                    </div>
                    </div>
                </div>

                  </NavLink>
            ))}
        </div>
      
        </div>
{/* Filters */}
        <div>

        </div>
    </div>
  )
}

export default AllHotels