import React from 'react'
import { BsDot } from 'react-icons/bs'
const Page18 = () => {
  return (
    <div>
       <div className="font-roboto bg-gray-100 lg:pt-28 pt-16">
          <div className="bg-blue-600 text-white text-center py-8">
            <img src="https://builtin.com/cdn-cgi/image/f=auto,fit=contain/sites/www.builtin.com/files/styles/company_logo/public/2024-05/Screenshot%202024-05-22%20at%2012.25.20%20PM.png" alt=" logo" className="mx-auto mb-4" />
            <h1 className="text-xl font-bold">Coupon Codes</h1>
            <p className="text-sm">
              Discover the trendiest, freshest, and most unique styles at , your ultimate fashion destination offering on-trend collections at...
              <span className="text-blue-300"> see more</span>
            </p>
            <div className="flex justify-center items-center mt-4">
              <i className="fas fa-star text-yellow-400"></i>
              <span className="ml-2 text-sm">4.6 of 5 | 1373 Reviews</span>
            </div>
          </div>
          <div className="text-center py-8">
            <p className="text-sm text-gray-600 mb-2">92% positive rating by 5K+ users</p>
            <p className="text-sm text-gray-600 mb-4">₹31 Lakh+ Cashback given in last month</p>
            <h2 className="text-2xl font-bold mb-2">Giant Fashion Sale: 40-80% Off Across Categories</h2>
            <p className="text-lg mb-4">+ Upto 8% CashKaro Cashback on all  Orders</p>
            <div className="bg-gray-100 p-4 rounded-lg inline-block">
              <p className="text-red-500 font-bold mb-2">Bonus Offer: Just for you</p>
              <p className="text-sm mb-2">+ Flat 2% Bonus Cashback on Buying Any Product worth ₹1500 or more</p>
              <div className="text-red-500 font-bold text-lg mb-4">
                <span>11</span>:<span>13</span>:<span>48</span>:<span>04</span>
                <span className="text-sm font-normal"> days hrs mins secs</span>
              </div>
              <button className="bg-orange-500 text-white py-2 px-4 rounded-full"><a href="https://www.amazon.in/">EARN UPTO 8% CASHBACK</a></button>
            </div>
          </div>
          <div className="bg-white py-8">
            <div className="flex justify-center items-center mb-4">
              <div className="text-center mx-4">
                <p className="text-sm text-gray-600 flex">Cashback Rates</p>
              </div>
              <div className="text-center mx-4">
                <p className="text-sm text-gray-600">Offer Terms</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-1/3 text-center">
                <p className="text-sm text-gray-600"> Purchase</p>
              </div>
              <div className="w-1/3 text-center">
                <p className="text-sm text-gray-600">Cashback Track in 30 Minutes</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-4">
              <div className="w-1/3 text-center">
                <i className="fas fa-circle text-orange-500"></i>
              </div>
              <div className="w-1/3 text-center">
                <i className="fas fa-circle text-orange-500"></i>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full"><a href="https://www.amazon.in/">See More Offers</a></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Page18
