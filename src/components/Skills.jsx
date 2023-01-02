import React from 'react'

import HTML from '../assets/html.svg';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import GitHub from '../assets/github.png';
import Python from '../assets/python.png';
import PostgreSQL from '../assets/postgresql.png';
import Java from '../assets/java.png';
import R from '../assets/react.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>These are some of the technologies I've worked with during my time at
                Texas A&M and in personal projects.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grod-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt="Javascript icon" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PostgreSQL} alt="PostgreSQL icon" />
                    <p className='my-4'>PostgreSQL</p>
                </div>
                <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={R} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills