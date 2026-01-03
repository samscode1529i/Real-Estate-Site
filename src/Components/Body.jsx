import React from 'react'
import bodyImg from '../assets/body-1.png'
import bodyImg2 from '../assets/body-2.png'
import bodyLine from '../assets/body-line.png'
import { FaArrowRight } from "react-icons/fa"
import { FaChevronDown } from "react-icons/fa"
import { FaBed, FaBath, FaHashtag } from "react-icons/fa"
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import bgBrown from '../assets/bg-brown.png'
import oval from '../assets/oval.png'
import logo from '../assets/logo.png'





const cards = [
  {
    img: img1,
    title: "Luxury Villa",
    beds: 4,
    baths: 3,
    tag: 12,
  },
  {
    img: img2,
    title: "Modern Apartment",
    beds: 2,
    baths: 2,
    tag: 8,
  },
  {
    img: img3,
    title: "Family Home",
    beds: 3,
    baths: 2,
    tag: 5,
  },
  {
    img: img4,
    title: "Beach House",
    beds: 4,
    baths: 4,
    tag: 6,
  },
  {
    img: img5,
    title: "Urban Loft",
    beds: 1,
    baths: 1,
    tag: 3,
  },
  {
    img: img6,
    title: "Country Cottage",
    beds: 2,
    baths: 1,
    tag: 7,
  },
];


const body = () => {
  return (
    <div>

        <div className='flex flex-row mt-29 w-[1200px] '>
            <div>
                <img src={bodyImg} alt="body image" className='w-[2000px]'/>
            </div>
            <div className='ml-9 pt-19'>
                <img src={bodyLine} alt="" />
                <h1 className='font-bold text-5xl pt-10 w-[600px]'>You're in good hands</h1>
                <p className='mt-6 w-[380px] text-gray-700'>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
                <button className='flex gap-1.5 items-center mt-7 cursor-pointer bg-black px-5 py-3 rounded-tr-[13px] text-white'>
                    Learn More <FaArrowRight className="text-lg text-amber-300" />
                </button>
            </div>
        </div>

        <div className='bg-[#F5F5F5] px-30 pt-20 relative'>
            <img src={bodyLine} alt="" className='mb-9' />
            <h1 className='text-5xl font-bold'>Find your next place to live</h1>

            <div>
                <div className="max-w-5xl mx-auto mt-10 bg-white rounded-xl shadow-md flex divide-x divide-black overflow-hidden justify-evenly text-right">
      
                    {/* Looking For */}
                    <div className="flex items-center px-6 py-3 gap-2 cursor-pointer">
                        <span className="font-medium">Looking For</span>
                        <FaChevronDown className="text-sm" />
                    </div>

                    {/* Location */}
                    <div className="flex items-center px-6 py-7 gap-2 cursor-pointer pr-10">
                        <span className="font-medium">Location</span>
                        <FaChevronDown className="text-sm" />
                    </div>

                    {/* Property Type */}
                    <div className="flex items-center px-6 py-3 gap-2 cursor-pointer">
                        <span className="font-medium">Property Type</span>
                        <FaChevronDown className="text-sm" />
                    </div>

                    {/* Price */}
                    <div className="flex items-center px-6 py-3 gap-2 cursor-pointer">
                        <span className="font-medium">Price</span>
                        <FaChevronDown className="text-sm" />
                    </div>

                    </div>
                </div>

            <div>
                <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 pb-110 relative">
                    {cards.map((card, idx) => (
                        <div
                        key={idx}
                        className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
                        >
                        {/* Image */}
                        <img
                            src={card.img}
                            alt={card.title}
                            className="w-full h-48 object-cover rounded-t-xl"
                        />

                        {/* Bottom Section */}
                        <div className="flex flex-col flex-1">
                            {/* Title */}
                            <h2 className="font-semibold text-lg px-4 py-3">{card.title}</h2>

                            {/* Divider */}
                            <div className="border-t border-gray-200 mx-4"></div>

                            {/* Icons Section */}
                            <div className="flex items-center justify-between px-4 py-3 text-gray-600 text-sm">
                            {/* Beds */}
                            <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
                                <FaBed /> {card.beds}
                            </div>

                            {/* Baths */}
                            <div className="flex items-center gap-1 border-r border-gray-200 px-2">
                                <FaBath /> {card.baths}
                            </div>

                            {/* Tag */}
                            <div className="flex items-center gap-1 pl-2">
                                <FaHashtag /> {card.tag}
                            </div>
                            </div>
                        </div>
                        </div>
                        ))}
                    </div>
            </div>
        </div>

        <div className='bg-white'>
            <div className='absolute ml-39'>
                <img src={bodyLine}  className='mt-25  '/>
                <h1 className='font-bold text-5xl pt-10 w-[600px]'>You're in good hands</h1>
                <p className='mt-6 w-[380px] text-gray-700'>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
                <button className='flex gap-1.5 items-center mt-7 cursor-pointer bg-black px-5 py-3 rounded-tr-[13px] text-white'>
                    Learn More <FaArrowRight className="text-lg text-amber-300" />
                </button>
                <div>

                </div>
            </div>
            <img src={bodyImg2} alt="body image" className='flex w-[600px] relative bottom-19 left-166' />
                
        </div>

        <div
            className="w-full flex flex-col items-center text-center justify-center bg-cover bg-center py-20" style={{ backgroundImage: `url(${bgBrown})` }}>
                <img src={bodyLine} alt="" />
            <h1 className='font-bold text-5xl pt-10 w-[600px] text-white'>You're in good hands</h1>
                <p className='mt-6 w-[380px] text-white'>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
                <button className='flex gap-1.5 items-center mt-7 cursor-pointer bg-amber-300 px-5 py-3 rounded-tr-[13px] text-black'>
                    Learn More <FaArrowRight className="text-lg text-white" />
                </button>
        </div>

        <div className="w-full flex justify-center py-20">
            <div className="flex gap-6">

                {/* Card 1 */}
                <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-lg shadow-sm">
                <img
                    src={oval}
                    alt="person"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-medium text-black">John Carter</span>
                </div>

                {/* Card 2 (middle - black) */}
                <div className="flex items-center gap-4 bg-black px-6 py-4 rounded-lg shadow-sm">
                <img
                    src={oval}
                    alt="person"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-medium text-white">Sarah Johnson</span>
                </div>

                {/* Card 3 */}
                <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-lg shadow-sm">
                <img
                    src={oval}
                    alt="person"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-medium text-black">Michael Lee</span>
                </div>

            </div>
            </div>


            <footer className="w-full bg-black text-white py-16">
                <div className="max-w-6xl mx-auto flex justify-between items-start px-6">

                    {/* Logo */}
                    <div>
                    <h1 className="text-2xl font-bold">Make your dream a reality</h1>
                    <img src={logo} alt="logo"/>
                    
                    </div>

                    {/* Links */}
                    <div className="flex gap-16">
                    <div className="flex flex-col gap-3">
                        <span className="font-semibold">Company</span>
                        <a href="#" className="text-gray-400 hover:text-white">About</a>
                        <a href="#" className="text-gray-400 hover:text-white">Careers</a>
                        <a href="#" className="text-gray-400 hover:text-white">Blog</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="font-semibold">Support</span>
                        <a href="#" className="text-gray-400 hover:text-white">Help Center</a>
                        <a href="#" className="text-gray-400 hover:text-white">Contact</a>
                        <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                    </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
                    © 2026 RealEstate. All rights reserved.
                </div>
            </footer>



    </div>
  )
}

export default body