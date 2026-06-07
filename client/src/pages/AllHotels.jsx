import React, { useState } from 'react'
import { facilityIcons, roomsDummyData } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const AllHotels = () => {

  const CheckBox = ({label, selected = false, onchange=()=>{}})=>{
    return(
      <label>
        <input type='checkbox' checked={selected} onChange={(e)=>onchange(e.target.checked, label)}></input>
        <span>{label}</span>
      </label>
    )
  }

    const RadioButton = ({label, selected = false, onchange=()=>{}})=>{
    return(
      <label>
        <input type='radio' name='sortOption' checked={selected} onChange={(e)=>onchange(e.target.checked, label)}></input>
        <span>{label}</span>
      </label>
    )
  }
  const[openFilters, setOpenFilters] = useState(false)

  const roomTypes= [
    "Single Bed",
    "Double Bed",
    "Luxary Room",
    "Family Suite"
  ];

  const priceRange = [
    "0-500",
    '500-1000',
    "1000-2000",
    "2000-3000"
  ];

  const sortOptions = [
    "Price : Low to High",
    "Price : High to Low",
    "Newest First"
  ];


  return (
    <div className="pt-2 flex flex-col md:flex-row">
      {/* Filters */}
        <div className={`mt-30  md:hidden w-80 border-2 border-gray-300 m-10 rounded-2xl ${openFilters?'h-110':'h-22'}`}>
          <div>
            <p className='font-extrabold text-xl m-2 text-emerald-900'>FILTERS</p>
            <span className='bg-emerald-900 text-white rounded-sm p-1 m-2 h-auto' onClick={()=>{setOpenFilters(!openFilters)}}>{openFilters?'Hide':'Show'}</span>
          </div>
          {
            openFilters?
            <div>
             
          <div className='m-2'>
            <p className='font-extrabold text-emerald-900'>Popular Filters</p>
            <div className='flex flex-col'>
            {roomTypes.map((room,index)=>(
              <CheckBox key={index} label={room}/>
            ))}
            </div>
          </div>
          <div className='m-2'>
            <p className='font-extrabold text-emerald-900'>Price Ranges</p>
            <div className='flex flex-col'>
            {priceRange.map((range,index)=>(
              <CheckBox key={index} label={`$ ${range}`}/>
            ))}
            </div>
          </div>
          <div className='m-2'>
            <p className='font-extrabold text-emerald-900'>Sort By</p>
            <div className='flex flex-col'>
            {sortOptions.map((option,index)=>(
              <RadioButton key={index} label={option}/>
            ))}
            </div>
          </div>
          </div>
            :
            ""
          }
        </div>
        <div className='md:w-[80vw]'> 
         <h1 className='font-playfair-display font-bold text-6xl md:mt-20 md:mt-30 pl-5 md:pl-10'>All <span className='text-emerald-900 font-playfair-display'>Rooms</span></h1>
        <h2 className='text-2xl text-gray-400 mt-5 pl-5 md:pl-10'>Explore all available stays and find your perfect room.</h2>
         
        <div>
            {roomsDummyData.map((room)=>(
              <NavLink to={`/rooms/${room._id}`} onClick={scrollTo(0,0)}  data-aos="fade-up">
                 <div className='md:w-210  m-2 md:m-10 md:flex md:gap-10'>
                    
                    <img className=' rounded-2xl h-65 w-100 ' src={room.images[0]}></img>
                    <div className='flex justify-between w-100'>
                    <div>
                    <p className='text-3xl font-playfair font-bold'>{room.hotel.name}</p>
                    <p className='text-xl text-gray-700'>{room.hotel.city}</p>
                    <p className='text-gray-400'>{room.hotel.address}</p>
                    <div className='flex flex-wrap items-center gap-4 mt-3 mb-6 '>
                      {room.amenities.map((item,index)=>(
                      <div key={index} className='bg-gray-200 md:p-2 rounded-2xl flex items-center gap-2'>
                        <img className='h-4 w-4' src={facilityIcons[item]}></img>
                        <p>{item}</p>
                      </div>

                    ))}
                      <div>
                        <p className='text-2xl font-bold'>${room.pricePerNight}<span className='text-gray-400'>/night</span></p>
                      </div>
                    </div>
                    
                    </div>
                    <div className='flex-col items-center '>
                        <p className='font-playfair text-2xl'>4.3<span className='text-[15px]'> ⭐⭐⭐⭐</span></p>
                        <br></br>
                        <button className='bg-emerald-900 text-white h-15 md:mt-27 w-25 rounded-lg m-1 p-1 hover:bg-emerald-700'>View Details</button>
                    </div>
                    </div>
                </div>

                  </NavLink>
            ))}
        </div>
      
        </div>
{/* Filters */}
        <div className='md:mt-40 hidden md:block w-80 border-2 border-gray-300 m-10 h-110 rounded-2xl fixed left-220'>
          <p className='font-extrabold text-xl m-2 text-emerald-900'>FILTERS</p>
          <div>
            <span className='bg-emerald-900 text-white rounded-sm p-1 m-2 '>Clear</span>
          </div>
          <div className='m-2'>
            <p className='font-extrabold text-emerald-900'>Popular Filters</p>
            <div className='flex flex-col'>
            {roomTypes.map((room,index)=>(
              <CheckBox key={index} label={room}/>
            ))}
            </div>
          </div>
          <div className='m-2'>
            <p className='font-extrabold text-emerald-900'>Price Ranges</p>
            <div className='flex flex-col'>
            {priceRange.map((range,index)=>(
              <CheckBox key={index} label={`$ ${range}`}/>
            ))}
            </div>
          </div>
          <div className='m-2'>
            <p className='font-extrabold text-emerald-900'>Sort By</p>
            <div className='flex flex-col'>
            {sortOptions.map((option,index)=>(
              <RadioButton key={index} label={option}/>
            ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default AllHotels