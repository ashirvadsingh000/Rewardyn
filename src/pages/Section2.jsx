import React from 'react'
import gift from '../../public/gift.png'
const Section2 = () => {
  return (
    <div className="flex flex-wrap justify-center md:flex-nowrap bg-white shadow-md rounded-md p-4 h-fit border-b border-b-slate-500">
      <div className="w-full md:w-1/2 xl:w-1/3 p-4">
        <img src={gift} className="w-full h-48 rounded-md" />
      </div>
      <div className="w-full md:w-1/2 xl:w-2/3 p-4">
        <h2 className="text-2xl  mb-2 font-poppins font-semibold">Gift Card </h2>
        <p className="text-gray-600">"Shop now and save big with our exclusive discounts and deals! "Don't miss out on our limited-time offers - shop smart, shop with us!"
"Get more bang for your buck with our special promotions and sales."
"From everyday essentials to luxury treats, find it all at unbeatable prices in our shop!""</p>
        <button className="bg-orange-500 hover:bg-orange-700 mt-3 text-white font-bold py-2 px-4 rounded-md">Get Gift</button>
      </div>
    </div>
  )
}

export default Section2 ;