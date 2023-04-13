import React from 'react';
import me from'../assets/me2.jpeg';
const About = () => {
  return (
    <div className='w-full  bg-[#8f8478]'>
        <p className='text-3xl font-extrabold pl-4 font-mono'><u>About me</u></p>
        <div className='  p-16 max-w-[1240px] mx-auto grid md:grid-cols-2  grid-cols-1 items-center'>  
            <div className='flex items-center justify-center pb-4'>
                <img className='w-[300px] sm:w-[300px] md:w-[300px] rounded-3xl shadow-[10px_50px_50px_15px_rgba(0,0,0,0.9)]' src={me} alt='me' />

            </div>          
            <div className='bg-white p-10 rounded-3xl shadow-[10px_50px_50px_15px_rgba(0,0,0,0.9)]'>
                <p>
                    I am Pasindu Anuradha Perera
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat soluta sint labore ipsa architecto optio necessitatibus culpa quis quasi explicabo, porro ipsum itaque inventore quo cupiditate, facilis debitis. Quasi, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus perferendis doloribus beatae saepe officia architecto vitae distinctio ut accusamus et exercitationem repudiandae maiores alias repellendus temporibus, porro aliquid. Sint, voluptatum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quia impedit est sequi labore? Atque nobis pariatur optio facilis quis voluptates earum unde quisquam amet, laudantium asperiores! Dolor, enim harum? Lorem ipsum dolor sit amet 

                </p>
            </div>
        </div>

    </div>
  )
}

export default About