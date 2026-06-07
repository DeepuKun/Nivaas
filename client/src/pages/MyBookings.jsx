import React, { useState } from 'react'
import {assets, userBookingsDummyData} from '../assets/assets'
const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData)
  return (
    <div className='pt-20'>
        <h1 className='font-playfair-display font-bold text-6xl mt-6 pl-5 md:pl-10'>My <span className='text-emerald-900 font-playfair-display'>Bookings</span></h1>
        <h2 className='text-2xl text-gray-400 mt-5 pl-5 md:pl-10'>Manage your reservations and keep track of your upcoming stays.</h2>


        <div className=' justify-around mt-10 text-2xl font-bold text-emerald-900 hidden md:flex'>
            <p>Hotels</p>
            
            <p>Date & Timings</p>
            
            <p>Payment</p>
        </div>

        <div>
          {bookings.map((booking)=>(
            <div key={booking._id} className='md:flex gap-6 m-4'>

              <div>
                <img src={booking.room.images[0]} className=' md:h-35 md:w-45 rounded-2xl'></img>
              </div>
              <div>
              <p className='mt-2 font-bold text-xl font-playfair-display'>{booking.hotel.name}<span className='text-sm text-emerald-700'> {booking.room.roomType}</span></p>
              <br></br>
              <div className='flex gap-2 text-gray-400'>
              <img src={assets.locationIcon}></img>
              <span>{booking.hotel.address}</span>
              </div>
              <div className='flex gap-2'>
                <img src={assets.guestsIcon}></img>
              <p>Guests : {booking.guests}</p>
              </div>
              
              <p className='font-bold'>Total : $ {booking.totalPrice}</p>
              </div>
              <div className='md:p-5 md:pl-10'>
                <p className='text-sm text-gray-400'>Check-In</p>
                <p>{new Date(booking.checkInDate).toDateString()}</p>
                <br></br>
                <p className='text-sm text-gray-400'>Check-Out</p>
                <p>{new Date(booking.checkOutDate).toDateString()}</p>
              </div>

              <div className='flex items-center gap-2 p-2 text-xl md:pl-70'>
                <div className={`h-3 w-3 rounded-full ${booking.isPaid?'bg-green-700':'bg-red-700'}`}></div>
                <div className={` ${booking.isPaid?'text-green-700':'text-red-700'}`}>{` ${booking.isPaid?"Paid":"Unpaid"}`}</div>
                {!booking.isPaid && (<button className='bg-emerald-900 text-white p-2 rounded-2xl ml-17 hover:bg-emerald-700'>
                  Pay Now
                  </button>)}
                  {console.log(bookings.isPaid)}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MyBookings