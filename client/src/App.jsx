import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, RouterProvider, Routes, useLocation } from 'react-router-dom'
import AllHotels from './pages/AllHotels'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelReg from './components/HotelReg'
import Layout from './pages/hotelOwner/Layout'
import AddRoom from './pages/hotelOwner/AddRoom'
import ListRoom from './pages/hotelOwner/ListRoom'
import Dashboard from './pages/hotelOwner/Dashboard'



const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  
  return (
    <div className=''>
      { false && < HotelReg/>}
     { !isOwnerPath && <NavBar/>}

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hotels' element={<AllHotels/>}></Route>
        <Route path='/rooms/:id' element={<RoomDetails/>}></Route>
        <Route path='/my-bookings' element={<MyBookings/>}/>
        <Route path='/owner' element={<Layout/>}>
        <Route index element={< Dashboard/>}/>
        <Route path ='add-room' element={<AddRoom/>}/>
        <Route path='list-room' element={<ListRoom/>}/>
        </Route>
        
      </Routes>
            <Footer/>
    </div>
  )
}

export default App