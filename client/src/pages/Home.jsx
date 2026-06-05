import React from 'react'
import Hero from '../components/Hero'
import Find from '../components/Find'
import FeaturedDestinations from '../components/FeaturedDestinations'
import ExclusiveDiscounts from '../components/ExclusiveDiscounts'
import Testimonials from '../components/Testimonials'
import NewsLetter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Find/>
        <FeaturedDestinations/>
        <ExclusiveDiscounts/>
        <Testimonials/>
        <NewsLetter/>
    </div>
  )
}

export default Home