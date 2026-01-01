import React from 'react'
import logo from '../assets/logo2.png'

const Navbar = () => {
  return (
    <nav className='w-full shadow-sm' >

        <div className="max-w-7xl px-29 py-10 h-16 flex items-center justify-between ">

          <div>
            {/* left side */}
            <img src={logo} alt="logo"/>
          </div>

          {/* Right Side */}
          <div className="flex space-x-8 font-medium">
            <a href="#" className='cursor-pointer hover:text-amber-300 transition'>Home</a>
            <a href="#" className='cursor-pointer hover:text-amber-300 transition'>Listings</a>
            <a href="#" className='cursor-pointer hover:text-amber-300 transition'>About</a>
            <a href="#" className='cursor-pointer hover:text-amber-300 transition'>Contact Us</a>
          </div>

          <div>
            <button className='cursor-pointer bg-amber-300 px-5 py-1 rounded-tr-[13px]'>
              Work with us
            </button>
          </div>
        </div>

    </nav>
  )
}

export default Navbar