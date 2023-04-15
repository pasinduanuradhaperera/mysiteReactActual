import React from 'react';
import me from '../assets/me2.jpeg';
import "./About.css"
const About = () => {
    return (
        <div className='w-full  bg-black'>
            <p className='text-4xl font-extrabold pl-4 font-mono text-center uppercase bg-white p-2'>About me</p>
            <div className='  p-16 max-w-[1240px] mx-auto grid md:grid-cols-2  grid-cols-1 items-center'>
                <div className='flex items-center justify-center pb-4'>
                    <div  className='w-[300px] sm:w-[300px] md:w-[300px] rounded-3xl shadow-[1px_2px_60px_1px_rgba(255,255,255,0.5)] overflow-hidden'>
                        <img src={me}  className='w-[300px] sm:w-[300px] md:w-[300px] about'alt='me'/>

                    </div>
                    
                </div>
                <div className=' scale bg-white p-10 rounded-3xl shadow-[1px_2px_60px_1px_rgba(255,255,255,0.3)]'>
                    <p>
                        As a dedicated computer science student at Eastern University, I am passionate about exploring the latest developments in technology and applying them to real-world problems.
                        In addition to my academic achievements, I have also gained practical experience through competitions and extracurricular activities.
                        I have worked on software development projects, collaborated with teams to design and implement innovative solutions, and contributed to open-source projects.
                        My skills include proficiency in programming languages such as Java, Python, R, PHP, Swift, C# and C++, as well as experience with front-end development using HTML, CSS, and JavaScript.
                        As I approach graduation, I am eager to apply my skills and knowledge to a challenging role in the technology industry. I am confident that my passion for learning, problem-solving abilities, and strong work ethic will make me a valuable asset to any team.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About