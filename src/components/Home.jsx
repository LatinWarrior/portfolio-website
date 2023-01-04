import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#2F4858]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-[#8892b0] text-2xl">Howdy, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Kyle Blanco</h1>
            <div className="inline">
                <h2 className="text-[#8892b0] inline text-3xl sm:text-6xl">I'm a Senior Computer Science student at</h2>
                <h2 className="text-[#800000] inline px-1 text-3xl sm:text-6xl">Texas A&M University.</h2>
            </div>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
                
            </p>
            <div className='flex items-center'>
                <Link to="work" smooth={true} duration={500} className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#810035] hover:border-[#810035]">
                    View Work
                    <span classNAme="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-3"/>
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home