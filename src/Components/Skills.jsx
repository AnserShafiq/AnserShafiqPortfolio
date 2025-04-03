import React from 'react'

import React_logo from '../Images/react.png';
import Vite from '../Images/vite-js.png';
import Typescript from '../Images/typescript.png';
import Next from '../Images/next.png';
import Tailwind_logo from '../Images/tailwind.png';
import MERN from '../Images/MERN.png';
import JS from '../Images/js.png'
import CSS from '../Images/css.png'
import HTML from '../Images/html.png'
import WP from '../Images/wp.png'
import SHOPIFY from '../Images/shopify.png'

const Skills = () => {
    return (
        <div className='flex flex-col w-[90%] lg:w-[85vw] 2xl:w-[80vw] mx-auto pt-[4%]' id='my-skills'>
            <div className='flex flex-col lg:flex-row mx-auto my-6 lg:my-12' >
                <div className='w-[100%] lg:w-[30%] flex relative lg:static flex-col top-[30%]'>
                    <h2 className='text-[2rem] lg:text-[3.2vw] relative lg:sticky top-[10%] font-bold tracking-wide leading-none lg:leading-[85%] italic text-zinc-900 josefin-font'>Technical <br/>Expertise</h2>
                </div>
            
                <div className='flex flex-col mt-[5%] lg:mt-0 lg:grid w-[100%] lg:w-[70%] lg:grid-cols-1'>
                    <div className={`flex flex-col py-2 lg:pt-0 lg:pb-14 mx-2 lg:mx-5 `}>
                        <img src={Next} alt='Next Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[-1%]'/>
                        <h3 className='text-2xl lg:text-3xl font-bold josefin-font mt-2'>Next JS</h3>
                        <h3 className='text-lg lg:text-xl font-normal'>I am proficient in developing well-managed and well-designed web applications using Next.js. I can work with both JavaScript and TypeScript versions of Next.js. I effectively utilize APIs, handle routing and authentication, ensure proper SEO optimization, maintain databases, and focus on scalability for applications.</h3>
                    </div>
                    <div className={`flex flex-col py-2 lg:pt-2 lg:pb-14 mx-2 lg:mx-5 `}>
                        <div className='flex flex-row items-center gap-5'>
                        <img src={Vite} alt='Vite JS Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[-1%]'/>
                        <img src={React_logo} alt='React Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[-1%]'/>
                        </div>
                        <h3 className='text-2xl lg:text-3xl font-bold josefin-font mt-2'>Vite JS + React JS</h3>
                        <h3 className='text-lg lg:text-xl font-normal'>I specialize in developing robust server and client components for web applications, including CRMs and online portals. I create efficient APIs, manage stores and routes, and implement secure JWT tokens for authentication. Additionally, I ensure that all projects are SEO optimized, responsive, and utilize VITE JS and React JS for top performance.</h3>
                    </div>
                    <div className={`flex flex-col py-2 lg:pt-2 lg:pb-14 mx-2 lg:mx-5 `}>
                        <img src={React_logo} alt='React Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[-1%]'/>
                        <h3 className='text-2xl lg:text-3xl font-bold josefin-font mt-2'>React JS</h3>
                        <h3 className='text-lg lg:text-xl font-normal'>Skilled in developing responsive and dynamic front-end applications using React JS. Experienced with React DOM, React Router, Firebase integration, and various libraries like React Icons. Capable of building scalable and efficient front-end architectures.</h3>
                    </div>
                    <div className={`flex flex-col py-2 lg:pt-2 lg:pb-14 mx-2 lg:mx-5 `}>
                        <img src={Tailwind_logo} alt='Tailwind Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[0]'/>
                        <h3 className='text-2xl lg:text-3xl font-bold josefin-font mt-2'>Tailwind CSS</h3>
                        <h3 className='text-lg lg:text-xl font-normal'> Expertise in Tailwind CSS, with the ability to create customized and extendable themes for responsive and visually appealing user interfaces. Skilled in rapidly building modern, optimized layouts.</h3>
                    </div>
                    <div className={`flex flex-col py-2 lg:pt-2 lg:pb-14 mx-2 lg:mx-5 `}>
                        <img src={MERN} alt='MERN Logo' className='w-[17rem] lg:w-[20vw] mb-2 ml-[-4%] lg:ml-[-1%]'/>
                        <h3 className='text-2xl lg:text-3xl font-bold josefin-font mt-2'>MERN</h3>
                        <h3 className='text-lg lg:text-xl font-normal'>Skilled in the complete MERN stack (MongoDB, Express, React, Node.js), effectively integrating front-end and back-end with database functionality. Experienced in developing well-structured, optimized web applications.</h3>
                    </div>
                    <div className={`flex flex-col py-2 lg:pt-2 lg:pb-14 mx-2 lg:mx-5 `}>
                        <img src={Typescript} alt='Typescript Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[-1%]'/>
                        <h3 className='text-2xl lg:text-3xl font-bold josefin-font mt-2'>TypeScript</h3>
                        <h3 className='text-lg lg:text-xl font-normal'>Proficient in TypeScript, emphasizing type safety, interfaces, and advanced type management. Experienced in implementing robust, dynamic features with strict type checking and efficient state management across applications.</h3>
                    </div>
                    <div className={`flex flex-col py-2 lg:pt-2 lg:pb-14 mx-2 lg:mx-5 `}>
                        <img src={JS} alt='JavaScript Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[-1%]'/>
                        <h3 className='text-2xl lg:text-3xl font-bold josefin-font mt-2'>JavaScript</h3>
                        <h3 className='text-lg lg:text-xl font-normal'>Strong command of JavaScript, including data binding, state management, and sequence control. Skilled in implementing dynamic features and functionality across applications.</h3>
                    </div>
                    <div className={`flex flex-col py-2 lg:pt-2 lg:pb-14 mx-2 lg:mx-5 `}>
                        <img src={HTML} alt='HTML5 Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[-1%]'/>
                        <h3 className='text-2xl lg:text-3xl font-bold josefin-font mt-2'>HTML5</h3>
                        <h3 className='text-lg lg:text-xl font-normal'>Extensive experience with HTML, ensuring the proper use of each element to create well-structured and accessible web content.</h3>
                    </div>
                    <div className={`flex flex-col py-2 lg:pt-2 lg:pb-14 mx-2 lg:mx-5 `}>
                        <img src={CSS} alt='CSS3 Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[-1%]'/>
                        <h3 className='text-2xl lg:text-3xl font-bold josefin-font mt-2'>CSS</h3>
                        <h3 className='text-lg lg:text-xl font-normal'>Expertise in CSS for styling and designing websites. Skilled in creating responsive, visually appealing, and user-friendly designs.</h3>
                    </div>
                    <div className={`flex flex-col py-2 lg:pt-2 lg:pb-14 mx-2 lg:mx-5 `}>
                        <img src={WP} alt='WordPress Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[-1%]'/>
                        <h3 className='text-2xl lg:text-3xl font-bold josefin-font mt-2'>WordPress</h3>
                        <h3 className='text-lg lg:text-xl font-normal'>Capable of developing and managing WordPress websites tailored to client needs. Proficient in creating eCommerce platforms and customizing themes for various business requirements.</h3>
                    </div>
                    <div className={`flex flex-col py-2 lg:pt-2 lg:pb-0 mx-2 lg:mx-5 `}>
                        <img src={SHOPIFY} alt='Shopify Logo' className='w-[4rem] lg:w-[5vw] mb-2 ml-[-1%]'/>
                        <h3 className='text-2xl lg:text-3xl font-bold josefin-font mt-2'>Shopify</h3>
                        <h3 className='text-lg lg:text-xl font-normal'>Skilled in developing robust eCommerce websites on Shopify, with expertise in managing product displays and handling store functionality. Capable of creating streamlined, user-friendly shopping experiences tailored to client needs.</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills
