import React from 'react';
import self_img from '../Images/myPic2.jpg';
import { FaArrowRight as Arrow} from "react-icons/fa6";
import '../index.css'

const About = () => {
  
  return (
    <div className='w-[95%] lg:w-[85vw] 2xl:w-[80vw] mx-auto pt-[13%] pb-[5%] flex flex-col justify-start items-center '>
      <div
        id='about-heading'
        className='flex text-center mb-[10%] lg:mb-[3%] flex-col'
      >
        <h2 className='text-[2.2rem] lg:text-[4.5vw] uppercase leading-tight lg:leading-[90%] font-bold josefin-font'>
          Let's Work <br /> Together
        </h2>
        <div className='w-fit mx-auto text-xl lg:text-2xl bg-stone-800 px-4 pt-3 mt-6 lg:mt-5 pb-2 font-bold josefin-font uppercase text-stone-100 rounded-[50px] transition-transform ease-in-out duration-[0.5s] hover:scale-[1.05] cursor-pointer'>
          <a href={'/contact-schedule'} alt='Link to contact me'>Contact now</a>
        </div>
      </div>
      <div className='relative mb-[10%] lg:mb-[3%]'>
        <img
          id='about-image'
          src={self_img}
          className='w-[70vw] lg:w-[22vw] h-[45vh] lg:h-[60vh] object-cover rounded-[200px] shadow-md shadow-stone-500'
          alt='Anser Shafiq'
        />
      </div>
      <div className='mb-4% text-center w-[94%] lg:w-[70%] mx-auto'>
        <h2 className='text-xl lg:text-2xl font-[500] josefin-font'>Based in Pakistan, I am a skilled Full Stack Developer with expertise in creating dynamic,<br className='hidden lg:block'/> responsive websites. My passion for efficient code, seamless user experiences, and<br className='hidden lg:block'/> cutting-edge technologies is reflected in the solutions I build.</h2>        
        <div className='flex flex-row my-4 justify-center transition'>
            <a className='mx-3 inline-flex items-center text-[1.1rem] lg:text-[1.1vw] p-0 uppercase josefin-font font-bold transitive-underline' href='mailto:ansershafiq@gmail.com'>
                Gmail <Arrow className='rotate-[-45deg] text-[1.rem] lg:text-[1.2vw] mb-1 ml-1'/>
            </a>
            <a className='mx-3 inline-flex items-center text-[1.1rem] lg:text-[1.1vw] p-0 uppercase josefin-font font-bold transitive-underline' href='https://www.linkedin.com/in/rao-ansar-shafiq/'>
                LinkedIn <Arrow className='rotate-[-45deg] text-[1.rem] lg:text-[1.2vw] mb-1 ml-1'/>
            </a>
            <a className='mx-3 inline-flex items-center text-[1.1rem] lg:text-[1.1vw] p-0 uppercase josefin-font font-bold transitive-underline' href='https://github.com/AnserShafiq'>
                Github <Arrow className='rotate-[-45deg] text-[1.rem] lg:text-[1.2vw] mb-1 ml-1'/>
            </a>
        </div>
      </div>
    </div>
  );
};

export default About;
