import React from 'react'
import BgVideo from '../Images/bg-video.mp4';


const Name = () => {
  return (
    <div className='video-bg w-full flex flex-col'>
        <video autoPlay loop muted className=' flex relative object-cover h-[80vh] lg:h-[90vh]'>
            <source src={BgVideo} />
        </video>
        <div className='w-full h-[80vh] absolute lg:h-[90vh] bg-[#27272ac0] '>
          <div className='flex flex-col justify-center h-full w-full lg:w-[85vw] 2xl:w-[80vw] mx-auto items-center text-center'>
            <h4 className='text-lg lg:text-2xl tracking-wide font-[500] uppercase text-stone-300 my-4 lg:mt-[5%] relative flex items-center ' >
              <span className="relative inline-flex items-center h-4 w-4 lg:h-auto lg:w-3 mr-2 mb-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--goldenish-text-color] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 lg:h-3 lg:w-3 bg-[--goldenish-text-color]"></span>
              </span>
                  Let's get linked for projects
            </h4>
            <h2 className=' font-extrabold text-[var(--goldenish-text-color)] italic text-[2.8rem] lg:text-[5.5vw] uppercase leading-[75%] tracking-wider font-[var(--josefin-font)]'>Anser Shafiq</h2>
            <h4 className='text-lg lg:text-2xl tracking-wide font-[500] mt-4 lg:mx-[25%] uppercase text-stone-200 italic' >Software Developer - React JS, Next JS, Vite JS, MERN, TypeScript and many more.  </h4>
            </div>
        </div>
    </div>
    
    
  )
}

export default Name