import React from 'react'
import { NavLink } from 'react-router-dom'
import { exclusiveOffers } from '../assets/assets'
const ExclusiveDiscounts = () => {
  return (
    <div>
        <div>
        <div  data-aos="fade-up">
            <h1 className='font-playfair-display font-bold text-6xl mt-5 md:mt-30 pl-5 md:pl-10'>Exclusive <span className='text-emerald-900 font-playfair-display'>Discounts</span></h1>
            <h2 className='text-2xl text-gray-400 mt-5 pl-5 md:pl-10'>Unlock limited-time deals on handpicked luxury stays.</h2>
        </div>
        </div>
        <div className='md:flex items-center justify-center w-screen mt-10'>
             {exclusiveOffers.map((item)=>(
                <div key={item._id} className='h-60 w-90 bg-cover rounded-2xl m-5 relative shadow-lg shadow-black'  data-aos="flip-left" style={{backgroundImage:`url(${item.image})`}}>
                    <p className='bg-white rounded-full p-2 h-9 w-25 m-2'>{item.priceOff}% OFF</p>
                    <p className='text-white font-bold font-playfair-display text-2xl m-2'>{item.title}</p>
                    <p className='text-gray-300 m-2'>{item.description}</p>
                    <p className='font-bold text-white m-2'>Expires : {item.expiryDate}</p>
                    <button className='bg-white text-black rounded-lg h-8 w-30 m-2 hover:bg-gray-300'>View Offer</button>
                </div>
             ))}
        </div>
          <div className='w-screen flex justify-center'>
            <NavLink to='/rooms'><button className='shadow-2xs shadow-black h-10 w-60 bg-emerald-900 text-white rounded-2xl hover:bg-emerald-700 mt-6'>View All</button></NavLink> 
        </div>
    </div>
  )
}

export default ExclusiveDiscounts