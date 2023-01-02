import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-pink-600">Howdy, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Kyle Blanco</h1>
            <div className="inline">
                <h2 className="text-[#8892b0] inline text-4xl sm:text-7xl">I'm a senior computer science student at</h2>
                <h2 className="text-[#800000] inline px-1 text-4xl sm:text-7xl">Texas A&M University.</h2>
            </div>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam illum officia incidunt soluta 
                distinctio ipsa blanditiis facilis, rerum, eligendi ab numquam commodi eius iusto. Dicta quas quis vero 
                tempora obcaecati.
            </p>
            <div>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                    View Work
                    <span classNAme="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-3"/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home