
import React from 'react'
import logo from '../../public/logo.png'
function Header() {
  return (
   <div className="navbar fixed  w-screen flex justify-between lg:h-20 shadow-lg shadow-cyan-800 lg:px-20 px-16 h-16 bg-white z-50 top-0">
  <div className='self-center'><a href=""><img src={logo} alt="" className=' size-14 lg:size-[76px]' /></a></div>
  <div className='self-center'><a href="" className=' font-poppins lg:font-bold font-semibold lg:text-2xl md:text-xl'> GET REWARDS ON EVERYTHING 🎁</a></div>
   </div>
  )
}

export default Header