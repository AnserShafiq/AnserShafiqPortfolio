import React, { useState, useEffect } from 'react';
import self_img from '../Images/myPic2.jpg';

const About = () => {
  const [headingOpacity, setHeadingOpacity] = useState(1);
    const fileURL = '/resume/resume.pdf';
  useEffect(() => {
    const handleScroll = () => {
      const pictureElement = document.getElementById('about-image');
      const headingElement = document.getElementById('about-heading');

      if (pictureElement && headingElement) {
        const picturePosition =  2.1 * pictureElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Calculate opacity based on the scroll position
        let newOpacity = picturePosition / windowHeight;

        if (newOpacity < 0) newOpacity = 0;
        if (newOpacity > 1) newOpacity = 1;

        setHeadingOpacity(newOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='w-[90%] lg:w-[85vw] 2xl:w-[80vw] mx-auto pt-[10%] flex flex-col justify-start items-center ' id='about-me'>
      <div
        id='about-heading'
        className='flex text-center sticky top-[10%] lg:top-[20%] mb-[15%] lg:mb-[3%] flex-col'
        style={{ opacity: headingOpacity, transition: 'opacity 0.3s ease-in-out' }}
      >
        <h2 className='text-[2.2rem] lg:text-[4.5vw] uppercase leading-tight lg:leading-[90%] font-bold josefin-font'>
          More About <br /> Anser Shafiq
        </h2>
      </div>
      <div className='relative mb-[15%] lg:mb-[3%]'>
        <img
          id='about-image'
          src={self_img}
          className='w-[70vw] lg:w-[22vw] h-[45vh] lg:h-[60vh] object-cover rounded-[200px] shadow-md shadow-stone-500'
          alt='Anser Shafiq'
        />
      </div>
      <div className='mb-4% text-center w-[98%] lg:w-[68%] mx-auto'>
        <h2 className='text-center text-2xl capitalize font-[700] josefin-font'>I am a seasoned software engineer with extensive expertise in web app development, utilizing modern technologies such as React JS, MERN stack, Tailwind CSS, HTML, CSS, JavaScript, WordPress, and Shopify.</h2>
        <h2 className='text-xl lg:text-xl font-[400] rubik-font mt-2 mb-[4%]'>My experience spans building high-performance, fully responsive, and optimized websites, with a keen focus on crafting intuitive, user-friendly interfaces and scalable architectures. I excel in delivering tailored web solutions that not only meet technical requirements but also enhance the overall user experience and ensure cross-device compatibility, making each project both visually appealing and highly functional.</h2>
        <div className='w-fit mx-auto text-xl bg-stone-800 px-4 pt-3 pb-2 font-bold josefin-font uppercase text-stone-100 rounded-[50px] transition-transform ease-in-out duration-[0.5s] hover:scale-[1.05] cursor-pointer'>
          <a href={fileURL} download={fileURL} alt='Link to my resume'>My Resume</a>
        </div>
      </div>
    </div>
  );
};

export default About;
