import React, { useState } from 'react'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(dashboardDummyData)
  return (
    <>
            <h1 className="font-playfair-display font-bold text-4xl md:text-6xl">
    Owner <span className="text-emerald-900">Dashboard</span>
  </h1>
    <div className="bg-white rounded-xl border border-emerald-100 shadow-sm mt-8">

  <div className="p-4 border-b border-emerald-100">
    <h2 className="text-xl font-semibold text-emerald-900">
      Recent Bookings
    </h2>
  </div>

  {/* Mobile Cards */}
  <div className="md:hidden p-4 space-y-3">
    {dashboardData.bookings.map((item, index) => (
      <div
        key={index}
        className="border border-emerald-100 rounded-xl p-4 shadow-sm"
      >
        <div className="space-y-2">

          <div className="flex justify-between">
            <span className="font-semibold text-gray-500">User</span>
            <span>{item.user.username}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-500">Room</span>
            <span>{item.room.roomType}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-500">Amount</span>
            <span>$ {item.totalPrice}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-500">Status</span>

            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                item.isPaid
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {item.isPaid ? "Completed" : "Pending"}
            </span>
          </div>

        </div>
      </div>
    ))}
  </div>

  {/* Desktop Table */}
  <div className="hidden md:block overflow-x-auto">
    <table className="w-full text-left">

      <thead className="bg-emerald-700 text-white">
        <tr>
          <th className="px-6 py-4">User Name</th>
          <th className="px-6 py-4">Room Name</th>
          <th className="px-6 py-4">Total Amount</th>
          <th className="px-6 py-4">Payment Status</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-emerald-100">

        {dashboardData.bookings.map((item, index) => (
          <tr
            key={index}
            className="hover:bg-emerald-50 transition"
          >
            <td className="px-6 py-4">
              {item.user.username}
            </td>

            <td className="px-6 py-4">
              {item.room.roomType}
            </td>

            <td className="px-6 py-4">
              $ {item.totalPrice}
            </td>

            <td className="px-6 py-4">
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.isPaid
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {item.isPaid ? "Completed" : "Pending"}
              </button>
            </td>
          </tr>
        ))}

      </tbody>
    </table>
  </div>

</div>
</>
  )
}

export default Dashboard