import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';


const Navbar = () => {

  const [nav, setNav] = useState(true);
  const handleNav =() =>{
    setNav(!nav);
  }
  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#8f8478] top-0'>
        <h1 className='w-full text-3xl font-bold  text-[#8f8478]'>PASINDU</h1>
        <ul className='hidden md:flex'>
          <li className='p-4 font-bold'>Home</li>
          <li className='p-4 font-bold'>About</li>
          <li className='p-4 font-bold'>Works</li>
          <li className='p-4 font-bold'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav? <AiOutlineClose size={30}/>:<AiOutlineMenu size={30}/>}          
        </div>
        <div className={!nav? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500":"fixed left-[-100%] "}>
        <h1 className='w-full text-3xl font-bold text-[#8f8478] mx-4 mt-8'>PASINDU</h1>

        <ul className='uppercase p-4'>
          <li className='p-4 font-bold border-b border-gray-600 text-center'>Home</li>
          <li className='p-4 font-bold border-b border-gray-600 text-center'>About</li>
          <li className='p-4 font-bold border-b border-gray-600 text-center'>Works</li>
          <li className='p-4 font-bold text-center'>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar