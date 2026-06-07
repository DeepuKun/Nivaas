import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'

const RoomDetails = () => {

    const {id} = useParams()
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(()=>{
       const room = roomsDummyData.find(room=>room._id===id)
       room && setRoom(room)
       room && setMainImage(room.images[0])
    },[])
  return (
    room && <div className='md:p-10 p-2 '>
         <h1 className='font-playfair-display font-bold text-6xl mt-25 md:mt-20 pl-2 md:pl-0'>Room <span className='text-emerald-900 font-playfair-display'>Details</span></h1>
         <div className='flex gap-5 mt-10'>
            <h1 className='text-5xl font-playfair'>{room.hotel.name}<span className='text-2xl'>  {room.roomType}</span></h1>
            <p className='bg-emerald-900  p-1 h-8 text-white rounded-sm'> 20 % OFF</p>
         </div>
         <p className='text-lg'>4.2<span> ⭐⭐⭐⭐</span></p>
         <img  className=' mt-5'src={assets.locationIcon}></img> <span className='text-gray-500'>{room.hotel.address}</span>


         <div className='flex flex-col md:flex-row gap-6 '>
            <div>
                <img src={mainImage} className='md:h-120 mt-10 rounded-2xl shadow-2xl'></img>
            </div>
            <div className='md:grid md:grid-cols-2 mt-6 flex items-center justify-center '>
            {room.images.length>1 && room.images.map((image,index)=>(
                <img className='md:h-57 md:w-55 h-20 w-20 m-2 md:m-2 shadow-2xl rounded-2xl' key={index} src={image} onClick={()=>setMainImage(image)}></img>
                
            ))}
            </div>
         </div>

         <div>
            <h1 className='text-emerald-900 font-damion md:text-4xl text-3xl mt-10'>Experience comfort, convenience, and exceptional hospitality in a stay designed to make every moment memorable.</h1>

            <div className='flex md:gap-4 gap-1 h-22 md:justify-center md:mr-180'>
                {room.amenities.map((item,index)=>{
                    return(
                        <div key={index} className='flex gap-2 md:w-36 md:h-15 md:p-2 rounded-2xl mt-10 bg-gray-300 '>
                            <img src={facilityIcons[item]}/>
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>
            <div>
                <h1 className='font-bold text-4xl mt-10'>${room.pricePerNight}/night</h1>
            </div>
         </div>
         <form className=' mt-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-200 rounded-2xl p-6 shadow-sm bg-white'>

    <div className='flex flex-col md:flex-row gap-6 w-full'>

        <div className='flex flex-col'>
            <label htmlFor='checkInDate' className='text-sm font-medium text-gray-600 mb-1'>
                Check-In
            </label>
            <input
                className='border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-emerald-800'
                type='date'
                id='checkInDate'
            />
        </div>

        <div className='flex flex-col'>
            <label htmlFor='checkOutDate' className='text-sm font-medium text-gray-600 mb-1'>
                Check-Out
            </label>
            <input
                className='border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-emerald-800'
                type='date'
                id='checkOutDate'
            />
        </div>

        <div className='flex flex-col'>
            <label htmlFor='guests' className='text-sm font-medium text-gray-600 mb-1'>
                Guests
            </label>
            <input
                className='border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-emerald-800'
                type='number'
                id='guests'
                min='1'
                placeholder='Guests'
            />
        </div>

    </div>

    <button
        type='submit'
        className='bg-emerald-900 hover:bg-emerald-800 transition text-white px-8 py-3 rounded-xl font-medium whitespace-nowrap'
    >
        Check Availability
    </button>

</form>


    <div className='mt-6'>
        {roomCommonData.map((item,index)=>(
            <div key={index} className='flex gap-2 items-start p-2'>
                <img src={item.icon}></img>
                <div>
                    <p className='font-bold'>{item.title}</p>
                    <p className='text-gray-400'>{item.description}</p>
                </div>
            </div>
        ))}
    </div>

    <div className='md:m-6 m-2'>
        <hr></hr>
       <p className='md:m-6 m-2 text-gray-400'> Step into a comfortable and elegantly designed room created to make your stay truly enjoyable. With modern amenities, stylish interiors, and carefully selected furnishings, every detail is crafted with your comfort in mind. Enjoy a peaceful atmosphere, convenient facilities, and a relaxing space where you can recharge, work, or simply unwind. Whether you're traveling for business or leisure, this room offers the perfect balance of comfort and convenience for an unforgettable experience.</p>
        <hr></hr>
    </div>

    <div>
        <div className='flex items-center'>
            <img className='h-20 w-20 object-cover rounded-2xl ' src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'></img>
            <div>
                 <h1 className='font-bold m-1'>Hosted By </h1>
            <p className='text-2xl m-1'>{room.hotel.name}</p>
            <p className='m-1'>4.6 ⭐⭐⭐⭐</p>
            </div>
           
        </div>
    </div>
    </div>
  )
}

export default RoomDetails