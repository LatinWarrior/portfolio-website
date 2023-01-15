import React from 'react'
import pos from '../assets/pos.jpeg'
import management from '../assets/management.jpeg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#2F4858]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#810035]'>Projects</p>
                <p className='py-6'>Some projects are internal to Texas A&M so they might not be able to be viewed for academic dishonest purposes.</p>
            </div>

            {/* Container */}
            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid item */}
                <div style={{backgroundImage: `url(${pos})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* POS System Project */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Point of Sale System (Full Stack Application)
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://pos-group-14.onrender.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.tamu.edu/petercastelein/project3">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Manager project */}
                <div style={{backgroundImage: `url(${management})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Website for Property Managers (Full Stack Application)
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Summer22-CSCE-310-Database-Systems/sprint-1-real-mgmt">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work