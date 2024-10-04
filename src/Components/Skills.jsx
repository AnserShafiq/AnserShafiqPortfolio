import React from 'react'

import React_logo from '../Images/react.png';
import Tailwind_logo from '../Images/tailwind.png';
import MERN from '../Images/MERN.png';
import JS from '../Images/js.png'
import CSS from '../Images/css.png'
import HTML from '../Images/html.png'
import WP from '../Images/wp.png'
import SHOPIFY from '../Images/shopify.png'

const Skills = () => {
    return (
        <div className='flex flex-col w-[90%] mx-auto py-[4%]'>
            <div className='flex flex-col lg:flex-row mx-auto my-12' >
            <div className='w-[100%] lg:w-[30%] flex relative lg:static flex-col top-[30%]'>
                <h2 className='text-[2.7rem] lg:text-[4vw] relative lg:sticky top-[10%] font-bold tracking-wide leading-none lg:leading-[85%] italic text-zinc-900 josefin-font'>Technical <br/>Expertise</h2>
            </div>
            
            <div className='flex flex-col mt-[5%] lg:mt-0 lg:grid w-[100%] lg:w-[70%] lg:grid-cols-1 lg:gap-[2%]'>
                <div className={`flex flex-col py-2 mx-2 lg:mx-5 `}>
                    <img src={React_logo} alt='React Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[-1%]'/>
                    <h3 className='text-[1.6rem] lg:text-[1.8vw] font-bold josefin-font'>React JS</h3>
                    <h3 className='text-[1.2rem] lg:text-[1.3vw] font-normal'>Proficient in developing responsive and dynamic front-end applications using React JS. Experienced with React DOM, React Router, Firebase integration, and a wide array of libraries such as React Icons. Capable of building scalable and efficient front-end architectures.</h3>
                </div>
                <div className={`flex flex-col py-2 mx-2 lg:mx-5 `}>
                    <img src={Tailwind_logo} alt='Tailwind Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[0]'/>
                    <h3 className='text-[1.6rem] lg:text-[1.8vw] font-bold josefin-font'>Tailwind CSS</h3>
                    <h3 className='text-[1.2rem] lg:text-[1.3vw] font-normal'> Expertise in Tailwind CSS, with the ability to create customized and extendable themes for responsive and visually appealing user interfaces. Skilled in rapidly building modern, optimized layouts.</h3>
                </div>
                <div className={`flex flex-col py-2 mx-2 lg:mx-5 `}>
                    <img src={MERN} alt='MERN Logo' className='w-[17rem] lg:w-[20vw] mb-2 ml-[-4%] lg:ml-[-1%]'/>
                    <h3 className='text-[1.6rem] lg:text-[1.8vw] font-bold josefin-font'>MERN</h3>
                    <h3 className='text-[1.2rem] lg:text-[1.3vw] font-normal'>Proficient in the full MERN stack (MongoDB, Express, React, Node.js), seamlessly connecting front-end and back-end with database integration. Adept at creating well-structured, performance-optimized web applications.</h3>
                </div>
                <div className={`flex flex-col py-2 mx-2 lg:mx-5 `}>
                    <img src={JS} alt='JavaScript Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[-1%]'/>
                    <h3 className='text-[1.6rem] lg:text-[1.8vw] font-bold josefin-font'>JavaScript</h3>
                    <h3 className='text-[1.2rem] lg:text-[1.3vw] font-normal'>Strong command of JavaScript, including data binding, state management, and sequence control. Skilled in implementing dynamic features and functionality across applications.</h3>
                </div>
                <div className={`flex flex-col py-2 mx-2 lg:mx-5 `}>
                    <img src={HTML} alt='HTML5 Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[-1%]'/>
                    <h3 className='text-[1.6rem] lg:text-[1.8vw] font-bold josefin-font'>HTML5</h3>
                    <h3 className='text-[1.2rem] lg:text-[1.3vw] font-normal'>Extensive experience with HTML, ensuring the proper use of each element to create well-structured and accessible web content.</h3>
                </div>
                <div className={`flex flex-col py-2 mx-2 lg:mx-5 `}>
                    <img src={CSS} alt='CSS3 Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[-1%]'/>
                    <h3 className='text-[1.6rem] lg:text-[1.8vw] font-bold josefin-font'>CSS</h3>
                    <h3 className='text-[1.2rem] lg:text-[1.3vw] font-normal'>Expertise in CSS for styling and designing websites. Skilled in creating responsive, visually appealing, and user-friendly designs.</h3>
                </div>
                <div className={`flex flex-col py-2 mx-2 lg:mx-5 `}>
                    <img src={WP} alt='WordPress Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[-1%]'/>
                    <h3 className='text-[1.6rem] lg:text-[1.8vw] font-bold josefin-font'>WordPress</h3>
                    <h3 className='text-[1.2rem] lg:text-[1.3vw] font-normal'>Capable of developing and managing WordPress websites tailored to client needs. Proficient in creating eCommerce platforms and customizing themes for various business requirements.</h3>
                </div>
                <div className={`flex flex-col py-2 mx-2 lg:mx-5 `}>
                    <img src={SHOPIFY} alt='Shopify Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[-1%]'/>
                    <h3 className='text-[1.6rem] lg:text-[1.8vw] font-bold josefin-font'>Shopify</h3>
                    <h3 className='text-[1.2rem] lg:text-[1.3vw] font-normal'>Skilled in developing robust eCommerce websites on Shopify, with expertise in managing product displays and handling store functionality. Capable of creating streamlined, user-friendly shopping experiences tailored to client needs.</h3>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Skills
