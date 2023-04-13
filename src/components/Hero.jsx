import React from 'react';
import Typed from 'react-typed';
import pic from '../assets/me.jpeg'
const Hero = () => {
    return (
        <div>
            <div className='text-white md:flex justify-center items-center mx-w-[800px] min-h-[660px]  w-full h-screen mx-auto text-center mt-[-96px] align-middle' >

                <div className='flex items-center justify-center md:pt-0  pt-[96px] '>
                    <div className='rounded-3xl overflow-hidden'>
                         <img src={pic} alt="" className='w-[300px]'/>
                    </div>
                </div>
                <div className=' flex flex-col justify-center md:min-w-[600px]  min-w-[360px]'>
                    <h1 className='md:text-7xl sm:text-6xl text-5xl  text-[#8f8478]'>Hi, There.</h1>
                    <div className='flex justify-center items-center'>
                        <h1 className='md:text-6xl sm:text-5xl text-4xl'>I am a&nbsp; </h1>
                        <Typed
                            className='md:text-6xl sm:text-5xl text-4xl text-[#8f8478]'
                            strings={['Programmer', 'Freelancer', 'Designer']}
                            typeSpeed={120}
                            backSpeed={140}
                            loop
                        />
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Hero