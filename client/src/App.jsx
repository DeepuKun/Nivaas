import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import AllHotels from './pages/AllHotels'

const App = () => {
  return (
    <div className=''>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hotels' element={<AllHotels/>}></Route>
      </Routes>
            <Footer/>
    </div>
  )
}

export default App