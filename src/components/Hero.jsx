import React from 'react';
import Typed from 'react-typed';
const Hero = () => {
  return (
    <div className='text-white'>
        <div className='mx-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='md:text-7xl sm:text-6xl text-5xl  text-[#32f8ff]'>Hi, There.</h1>
                <div className='flex justify-center items-center'>
                    <h1 className='md:text-6xl sm:text-5xl text-4xl'>I am a&nbsp; </h1>
                    <Typed 
                        className='md:text-6xl sm:text-5xl text-4xl text-[#32f8ff]'
                        strings={['Programmer', 'Freelancer', 'Designer']} 
                        typeSpeed={120} 
                        backSpeed={140}
                        loop
                        />
                </div>

        </div>
    </div>
  )
}

export default Hero