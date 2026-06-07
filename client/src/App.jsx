import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import AllHotels from './pages/AllHotels'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'

const App = () => {

   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  
  return (
    <div className=''>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hotels' element={<AllHotels/>}></Route>
        <Route path='/rooms/:id' element={<RoomDetails/>}></Route>
        <Route path='/my-bookings' element={<MyBookings/>}/>
      </Routes>
            <Footer/>
    </div>
  )
}

export default App