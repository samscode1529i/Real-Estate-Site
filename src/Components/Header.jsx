import React from 'react'
import header from '../assets/header.png'
import { FaArrowRight } from "react-icons/fa"

const Header = () => {
  return (
    <div>
        <header className='relative h-[600px] w-full pt-20 pl-24'>

            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                backgroundImage: `url(${header})`,
                }}>
            </div>
            
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-tr from-black/90 to-transparent z-0"></div>

             {/* Header content */}
            <div className="relative z-10 flex flex-col justify-center text-left  text-center text-white px-4">
                <h1 className="text-5xl text-[70px] font-bold mb-4 leading-[70px]">
                    Beautiful <br/> homes made <br/> for you
                </h1>
                <p className="text-xl mb-6 mt-4 w-[450px] font-thin">
                    In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.
                </p>

                <div className='flex flex-row items-center mt-20 gap-3 bg-white w-255 h-15.5 pl-10 '>
                    <p className='text-black text-lg'>See all listings</p>
                    <FaArrowRight className="text-lg text-amber-300" />
                </div>
            </div>
                
            
        </header>
    </div>
  )
}

export default Header