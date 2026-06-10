import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const AddRoom = () => {
    const [images, setImages] = useState({
        1:null,
        2:null,
        3:null,
        4:null
    })
    

    const [input, setInput] = useState({
        roomType:'',
        pricePerNight:0,
        amenities:{
            'Free Wifi' : false,
            'Free Breakfast' : false,
            'Room Service' : false,
            'Mountain View' : false,
            'Pool Acess' : false,
        }
    })
  return (
    <form>
         <h1 className="font-playfair-display font-bold text-4xl md:text-6xl">
    Add <span className="text-emerald-900">Room</span>
  </h1>
  <p>Images</p>
  <div className='grid gris-cols-2 sm:flex gap-4 my-2 flex-wrap'>
    {Object.keys(images).map((key)=>(
        <label htmlFor={`roomImage${key}`} key={key}>
            <img src={images[key] ?URL.createObjectURL(images[key]):assets.uploadArea}/>
            <input type='file' accept='image/*' id={`roomImage${key}`} hidden onChange={e=>setImages({...images, [key]:e.target.files[0]})}/>
        </label>
    ))}
  </div>

  <div className="w-full flex flex-col sm:flex-row gap-4 mt-6">

  {/* Room Type */}
  <div className="flex-1">
    <label className="block mb-2 text-sm font-semibold text-gray-700">
      Room Type
    </label>

    <select
      value={input.roomType}
      onChange={(e) =>
        setInput({ ...input, roomType: e.target.value })
      }
      className="w-full rounded-xl border border-emerald-800 bg-white px-4 py-3 outline-none transition focus:border-emerald-800 focus:ring-2 focus:ring-emerald-100"
    >
      <option value="">Select Room Type</option>
      <option value="Single Bed">Single Bed</option>
      <option value="Double Bed">Double Bed</option>
      <option value="Luxury Room">Luxury Room</option>
      <option value="Family Suite">Family Suite</option>
    </select>
  </div>

  {/* Price */}
  <div className="flex-1">
    <label className="block mb-2 text-sm font-semibold text-gray-800">
      Price <span className="text-gray-400">/night</span>
    </label>

    <input
      type="number"
      placeholder="0"
      value={input.pricePerNight}
      onChange={(e) =>
        setInput({
          ...input,
          pricePerNight: e.target.value,
        })
      }
      className="w-full rounded-xl border border-emerald-800 bg-white px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
    />
  </div>

</div>
<p className="text-lg font-semibold text-gray-800 mb-3">
  Amenities
</p>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">

  {Object.keys(input.amenities).map((amenity, index) => (
    <label
      key={index}
      htmlFor={`amenity${index + 1}`}
      className={`flex items-center gap-2 cursor-pointer rounded-xl border p-3 transition-all
      ${
        input.amenities[amenity]
          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
          : "border-gray-200 hover:border-emerald-300"
      }`}
    >
      <input
        type="checkbox"
        id={`amenity${index + 1}`}
        checked={input.amenities[amenity]}
        onChange={() =>
          setInput({
            ...input,
            amenities: {
              ...input.amenities,
              [amenity]: !input.amenities[amenity],
            },
          })
        }
        className="h-4 w-4 accent-emerald-600"
      />

      <span className="text-sm font-medium">
        {amenity}
      </span>
    </label>
  ))}

</div>

<button
  type="submit"
  className="mt-8 w-full sm:w-auto rounded-xl bg-emerald-700 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-800 hover:shadow-lg active:scale-95"
>
  Add Room
</button>
    </form>
  )
}

export default AddRoom