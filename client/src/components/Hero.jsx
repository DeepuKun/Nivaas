import React from 'react'

const Hero = () => {
  return (
<div
  className="md:w-full relative bg-cover bg-center h-[550px] rounded-2xl overflow-hidden flex-col overflow-auto scrollbar-none"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/29649745/pexels-photo-29649745.jpeg')",
  }}
>
  <div className=" md:w-full absolute inset-0 bg-black/40 rounded-2xl"></div>

  <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-16 ">
    <h1 className="font-playfair-display text-5xl md:text-8xl text-white font-semibold">
      Find Your Perfect Stay
    </h1>

    <p className="text-white/90 text-lg md:text-2xl mt-4 max-w-2xl">
      Discover luxury hotels, cozy retreats, and unforgettable experiences around the world.
    </p>
  </div>
</div>
  )
}

export default Hero