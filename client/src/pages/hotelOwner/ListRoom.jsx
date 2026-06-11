import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets'

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData)

  const toggleAvailability = (index) => {
    const updatedRooms = [...rooms]

    updatedRooms[index] = {
      ...updatedRooms[index],
      isAvailable: !updatedRooms[index].isAvailable,
    }

    setRooms(updatedRooms)
  }

  return (
    <div>
      <h1 className="font-playfair-display font-bold text-4xl md:text-6xl">
        Room <span className="text-emerald-900">Listings</span>
      </h1>
      {/* Mobile */}
<div className="md:hidden space-y-4 mt-6">
  {rooms.map((item, index) => (
    <div
      key={index}
      className="bg-white border border-emerald-100 rounded-xl p-4 shadow-sm"
    >
      <h3 className="font-semibold text-lg text-emerald-900">
        {item.roomType}
      </h3>

      <p className="text-gray-600 mt-2">
        {item.amenities.join(", ")}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="font-medium">
          $ {item.pricePerNight}/night
        </span>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={item.isAvailable}
            onChange={() => toggleAvailability(index)}
            className="sr-only peer"
          />

          <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-emerald-600 transition-colors"></div>

          <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></span>
        </label>
      </div>
    </div>
  ))}
</div>

{/* Desktop View Table */}
<div className="hidden md:block overflow-x-auto">
  {/* table */}
  <div className="hidden md:block overflow-x-auto mt-6 rounded-xl border border-emerald-100 bg-white shadow-sm">
  <table className="w-full text-left">

    <thead className="bg-emerald-700 text-white">
      <tr>
        <th className="px-6 py-4">Name</th>
        <th className="px-6 py-4">Facility</th>
        <th className="px-6 py-4">Price/Night</th>
        <th className="px-6 py-4 text-center">Available</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-emerald-100">
      {rooms.map((item, index) => (
        <tr
          key={index}
          className="hover:bg-emerald-50 transition-colors"
        >
          <td className="px-6 py-4 font-medium">
            {item.roomType}
          </td>

          <td className="px-6 py-4 text-gray-600">
            {item.amenities.join(", ")}
          </td>

          <td className="px-6 py-4">
            $ {item.pricePerNight}
          </td>

          <td className="px-6 py-4 text-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={item.isAvailable}
                onChange={() => toggleAvailability(index)}
                className="sr-only peer"
              />

              <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-emerald-600 transition-colors"></div>

              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></span>
            </label>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
    </div>
  )
}

export default ListRoom