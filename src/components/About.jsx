import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#2F4858] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right md:text-left pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#810035]'>About Me</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                    <div className=' sm:text-right md:text-left text-4xl font-bold'>
                        <p>Howdy, I'm Kyle. </p>
                    </div>
                    <div>
                        <p>I'm a senior computer science student at Texas A&M University who specializes in front-end development. This portfolio website should give you a good idea of 
                            what skills I possess as a programmer and what I can offer a company.
                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About