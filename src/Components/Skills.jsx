import React from 'react'

import React_logo from '../Images/react.png';
import Tailwind_logo from '../Images/tailwind.png';

const Skills = () => {
    return (
        <div className='flex flex-col w-[90%] mx-auto py-[4%]'>
            <div className='flex flex-row mx-auto my-12' >
            <div className='w-[30%] flex static flex-col top-[30%]'>
                <h2 className='text-[4vw] sticky top-[10%] font-bold tracking-wide leading-[85%] italic text-zinc-900 josefin-font'>Framed<br/>Skills</h2>
            </div>
            
            <div className='grid w-[70%] grid-cols-1 gap-[2%]'>
                <div className={`flex flex-col py-5 mx-5 `}>
                    <img src={React_logo} alt='React Logo' className='w-[5vw] mb-2 ml-[-1%]'/>
                    <h3 className='text-[1.8vw] font-bold josefin-font'>React JS</h3>
                    <h3 className='text-[1.3vw] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis numquam reprehenderit, perferendis harum quibusdam ad quo impedit similique aspernatur fuga voluptatem, doloribus et officia possimus sint cum! Eius, voluptatibus!</h3>
                </div>
                <div className={`flex flex-col py-5 mx-5 `}>
                    <img src={Tailwind_logo} alt='React Logo' className='w-[5vw] mb-2 ml-[-1%]'/>
                    <h3 className='text-[1.8vw] font-bold josefin-font'>Tailwind CSS</h3>
                    <h3 className='text-[1.3vw] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis numquam reprehenderit, perferendis harum quibusdam ad quo impedit similique aspernatur fuga voluptatem, doloribus et officia possimus sint cum! Eius, voluptatibus!</h3>
                </div>
                <div className={`flex flex-col py-5 mx-5 `}>
                    <img src={React_logo} alt='React Logo' className='w-[5vw] mb-2 ml-[-1%]'/>
                    <h3 className='text-[1.8vw] font-bold josefin-font'>MERN</h3>
                    <h3 className='text-[1.3vw] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis numquam reprehenderit, perferendis harum quibusdam ad quo impedit similique aspernatur fuga voluptatem, doloribus et officia possimus sint cum! Eius, voluptatibus!</h3>
                </div>
                <div className={`flex flex-col py-5 mx-5 `}>
                    <img src={React_logo} alt='React Logo' className='w-[5vw] mb-2 ml-[-1%]'/>
                    <h3 className='text-[1.8vw] font-bold josefin-font'>JavaScript</h3>
                    <h3 className='text-[1.3vw] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis numquam reprehenderit, perferendis harum quibusdam ad quo impedit similique aspernatur fuga voluptatem, doloribus et officia possimus sint cum! Eius, voluptatibus!</h3>
                </div>
                <div className={`flex flex-col py-5 mx-5 `}>
                    <img src={React_logo} alt='React Logo' className='w-[5vw] mb-2 ml-[-1%]'/>
                    <h3 className='text-[1.8vw] font-bold josefin-font'>HTML5</h3>
                    <h3 className='text-[1.3vw] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis numquam reprehenderit, perferendis harum quibusdam ad quo impedit similique aspernatur fuga voluptatem, doloribus et officia possimus sint cum! Eius, voluptatibus!</h3>
                </div>
                <div className={`flex flex-col py-5 mx-5 `}>
                    <img src={React_logo} alt='React Logo' className='w-[5vw] mb-2 ml-[-1%]'/>
                    <h3 className='text-[1.8vw] font-bold josefin-font'>CSS</h3>
                    <h3 className='text-[1.3vw] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis numquam reprehenderit, perferendis harum quibusdam ad quo impedit similique aspernatur fuga voluptatem, doloribus et officia possimus sint cum! Eius, voluptatibus!</h3>
                </div>
                <div className={`flex flex-col py-5 mx-5 `}>
                    <img src={React_logo} alt='React Logo' className='w-[5vw] mb-2 ml-[-1%]'/>
                    <h3 className='text-[1.8vw] font-bold josefin-font'>WordPress</h3>
                    <h3 className='text-[1.3vw] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis numquam reprehenderit, perferendis harum quibusdam ad quo impedit similique aspernatur fuga voluptatem, doloribus et officia possimus sint cum! Eius, voluptatibus!</h3>
                </div>
                <div className={`flex flex-col py-5 mx-5 `}>
                    <img src={React_logo} alt='React Logo' className='w-[5vw] mb-2 ml-[-1%]'/>
                    <h3 className='text-[1.8vw] font-bold josefin-font'>Shopify</h3>
                    <h3 className='text-[1.3vw] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis numquam reprehenderit, perferendis harum quibusdam ad quo impedit similique aspernatur fuga voluptatem, doloribus et officia possimus sint cum! Eius, voluptatibus!</h3>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Skills