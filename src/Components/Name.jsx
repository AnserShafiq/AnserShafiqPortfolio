import React from 'react'
import BgVideo from '../Images/bg-video.mp4';


const Name = () => {
  return (
    <div className='video-bg w-full flex flex-col'>
        <video autoPlay loop muted className=' flex relative object-cover h-[70vh] lg:h-[90vh]'>
            <source src={BgVideo} />
        </video>
        <div className='w-full absolute flex flex-col justify-center items-center text-center h-[70vh] lg:h-[90vh] bg-[#27272ac0] '>
            <h4 className='text-[1.1rem] lg:text-[1.3vw] tracking-wide font-[500] uppercase text-stone-300 my-4 lg:mt-[5%]' >
            <span className="relative inline-flex h-4 w-4 lg:h-3 lg:w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--goldenish-text-color] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 lg:h-3 lg:w-3 bg-[--goldenish-text-color]"></span>
            </span>
               Let's get linked for projects</h4>
            <h2 className=' font-extrabold text-[var(--goldenish-text-color)] italic text-[2.8rem] lg:text-[7vw] uppercase leading-[75%] tracking-wider font-[var(--josefin-font)]'>Anser Shafiq</h2>
            <h4 className='text-[1.3rem] lg:text-[1.5vw] tracking-wide font-[500] mt-4 lg:mx-[25%] uppercase text-stone-200 italic' >Software Developer - React JS, MERN, Tailwind CSS,<br className='hidden lg:block'/> WordPress, Shopify, and many more.  </h4>
        </div>
    </div>
    
    
  )
}

export default Name