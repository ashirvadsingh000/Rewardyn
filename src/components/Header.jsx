
import React from 'react'
import { IoPersonCircleOutline } from "react-icons/io5";
import logo from '../../public/logo.png'
import { Link } from 'react-router-dom';
function Header() {
  return (
   <div className="navbar fixed  w-screen flex justify-between lg:h-20 shadow-md  shadow-slate-400 lg:px-20 px-16 h-16 bg-white z-50 top-0 border-b border-black">
  <div className='self-center '><a href="" className='flex'><img src={logo} alt="" className=' brightness size-14 lg:size-[76px]' />  </a></div>
 <div className='flex '>
 <div className='self-center'><a  className=' font-poppins lg:font-bold font-semibold lg:text-2xl md:text-xl sm:text-lg hidden sm:flex'> GET REWARDS ON EVERYTHING 🎁 </a></div>
 <a href='' className=' self-center lg:ml-9 ml-6'> <Link to="/login"><IoPersonCircleOutline className=' self-center lg:text-5xl text-4xl hover:text-cyan-400'/></Link> </a>
 </div>
  
   </div>
  )
}

export default Header