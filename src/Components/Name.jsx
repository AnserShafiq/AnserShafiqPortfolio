import React from 'react'
import BgVideo from '../Images/bg-video.mp4';


const Name = () => {
  return (
    <div className='video-bg w-full flex flex-col'>
        <video autoPlay loop muted className=' flex relative object-cover h-[90vh]'>
            <source src={BgVideo} />
        </video>
        <div className='w-full absolute flex flex-col justify-center items-center text-center h-[90vh] bg-[#27272ac0] '>
            <h4 className='text-[1.3vw] tracking-wide font-[500] uppercase text-stone-300 lg:mt-[5%]' >Let's get linked for projects</h4>
            <h2 className=' font-extrabold text-[var(--goldenish-text-color)] italic text-[7vw] uppercase leading-[75%] tracking-wider font-[var(--josefin-font)]'>Anser Shafiq</h2>
            <h4 className='text-[1.5vw] tracking-wide font-[500] mt-4 lg:mx-[25%] uppercase text-stone-200 italic' >Software Developer - React JS, MERN, Tailwind CSS,<br/> WordPress, Shopify, and many more.  </h4>
        </div>
    </div>
    
    
  )
}

export default Name