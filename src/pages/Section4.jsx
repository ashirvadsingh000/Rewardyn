import React from 'react'
import { FaThumbsUp } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
const Section4 = () => {
  return (
    <div className="flex flex-col items-center justify-center m-7 my-9 bg-white">
    <h1 className="text-xl font-semibold mb-6 text-center font-poppins font-semibold">India's Best Cashback & Coupons Site</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-600 text-white p-8 rounded-lg flex flex-col items-center">
        <FaThumbsUp  className='text-6xl mb-4'/>
            <p className="text-center text-lg">Highest Cashback Rates</p>
        </div>
        <div className="bg-blue-600 text-white p-8 rounded-lg flex flex-col items-center">
        <FaRegCheckCircle className='text-6xl mb-4' />
            <p className="text-center text-lg">Trusted by 2 Crore Indians</p>
        </div>
        <div className="bg-blue-600 text-white p-8 rounded-lg flex flex-col items-center">
        <FaRupeeSign className='text-6xl mb-4' />
            <p className="text-center text-lg">₹700 Crore Cashback Paid</p>
        </div>
    </div>
</div>
  )
}

export default Section4
