import React from 'react'
import {cities} from '../assets/assets';
const HotelReg = () => {
  return (
    <div className='z-100 mt-10 fixed h-screen w-screen justify-center items-center  flex gap-10 bg-black/50'>
      <div>
        <p className='text-2xl text-white'>x</p>
        <div className='flex bg-white h-130 rounded-2xl  gap-2 p-2 '>
          <img className='h-126 w-90 rounded-2xl'src='https://images.pexels.com/photos/34496713/pexels-photo-34496713.jpeg'></img>
          <div >
            <h2 className="text-center text-4xl font-playfair max-w-2xl text-emerald-900">Register Your <span className=" text-white bg-gradient-to-t from-emerald-700 to-white p-1 bg-left inline-block bg-no-repeat">Hotel</span></h2>        
                <div className='flex flex-col mt-13 p-2'>
              <label   htmlFor='name' className='text-xl'>Hotel Name</label> <input id='name' type='text' placeholder='Type Here' className='border mt-1 border-gray-400 rounded-2xl'></input>
               
              <label   htmlFor='contact' className='text-xl mt-2'>Phone</label> <input id='conatct' type='text' placeholder='Type Here' className='border mt-1 border-gray-400 rounded-2xl'></input>
              
              <label   htmlFor='address' className='text-xl mt-2'>Adress</label> <input type='address' placeholder='Type Here' className='border mt-1 border-gray-400 rounded-2xl'></input>
              <div>
                <label htmlFor='city' className='text-xl mt-2'>City </label>
                <select id='city'  className='border border-gray-400 rounded-2xl mt-3'>
                  <option value=''>  Select City</option>
                  {cities.map((city)=>(
                    <option value={city} key={city}>{city}</option>
                  ))}

                </select>
              </div>
              <button className='bg-emerald-900 text-white mt-23 rounded-2xl h-20 hover:bg-emerald-700'>Register</button>
          </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default HotelReg