import React, { useEffect, useState } from 'react'
import { GrFormNextLink as NEXT } from "react-icons/gr";
import Loading from './Loading';

const ProjectsPage = () => {
    const my_projects = [
        {
            name: 'Work Horizon',
            link: 'https://www.workhorizon.pk/',
            type: 'Business Consulting & Services',
            picture: require('./Images/workhorizon.png'),
            date: 'March 2025',
            software: 'Next TS, React TS, MySQL',
        },
        {
            name: 'Talent Avenue',
            link: 'https://talentavenue.netlify.app/',
            type: 'Canadian Recruitment Agency',
            picture: require('./Images/talentavenue.png'),
            date: 'Dec 2024',
            software: 'React JS, Tailwind CSS, Firebase',  
        },{
            name: 'Global HR',
            link: 'https://globalhr.vercel.app/',
            type: 'Canadian Agency',
            picture: require('./Images/globalhr.png'),
            date: 'Nov 2024',
            software: 'React JS, Tailwind CSS',  
        },
        {
            name: 'Labour Master',
            link: 'https://labourmaster.ca/',
            type: 'Recruitment Agency',
            picture: require('./Images/labour.PNG'),
            date: 'Sept 2024',
            software: 'React JS, Tailwind CSS, Firebase',  
        },
        {
            name: 'Intellect Workforce',
            link: 'https://intellectworkforce.ca/',
            type: 'Recruitment Agency',
            picture: require('./Images/intellect.PNG'),
            date: 'Aug 2024',
            software: 'React JS, Firebase, CSS',
        },
        {
            name: 'RybelX',
            link: 'https://rybelx.com/',
            type: 'Sports Brand',
            picture: require('./Images/rybelx.PNG'),
            date: 'June 2024',
            software: 'WordPress, WooCommerce',
            
        },
        {
            name: 'TM Staffing Services',
            link: 'https://tmstaffing.ca/',
            type: 'Recruitment Agency',
            picture: require('./Images/tm.PNG'),
            date: 'Feb 2024',
            software: 'React JS, Firebase, CSS',
        },
        {
            name: 'Perfect HR',
            link: 'https://perfecthr.ca/',
            type: 'Recruitment Agency',
            picture: require('./Images/perfect.PNG'),
            date: 'Jan 2024',
            software: 'WordPress',
        },
        {
            name: 'God Speed MBS',
            link: 'https://godspeedmbs.com/',
            type: 'Medical Billings',
            picture: require('./Images/godspeed.PNG'),
            date: 'Jan 2024',
            software: 'WordPress',
        },
    ];

      const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 3000); // 4 seconds delay
    
        return () => clearTimeout(timer);
      }, []);
    
      if (isLoading) return <Loading />;

    return (
        <>
        <div className='flex flex-row items-end w-[90%] lg:w-[85vw] 2xl:w-[80vw] mx-auto pt-[8vh] lg:pt-[15vh]'>
            <a className='text-[0.8rem] underline mr-1 text-stone-600 cursor-pointer transition ease-in-out duration-[0.5s] hover:scale-[1.1] hover:text-red-600' href='/'>Home</a>
            <NEXT />
            <a className='text-[0.8rem] underline ml-1 text-stone-600 cursor-pointer transition ease-in-out duration-[0.5s] hover:scale-[1.1] hover:text-red-600' href='/my-projects'>Projects</a>
        </div>
        
        <div id='projects-section' className='flex flex-col w-[90%] lg:w-[85vw] 2xl:w-[80vw] mx-auto mb-14 lg:mb-8 pt-[5%] lg:pt-[2.5%] pb-[4%]'>
            <h2 className='font-extrabold text-zinc-800 text-[2.2rem] lg:text-[2.8rem] lg:text-[3rem] uppercase leading-none text-center tracking-wider font-[var(--josefin-font)]'>
                All Projects
            </h2>

            <div className='flex lg:grid flex-col lg:grid-cols-[30%,30%,30%] place-content-between mt-8 pb-[7%] lg:pb-[3%]'>
                {my_projects 
                    .map((Project, index) => (
                        <a className='my-[1rem] lg:my-10' key={index} href={Project.link}>
                            <div className='flex flex-col w-full rounded-[30px] border-2 border-[#0000000a] shadow-md shadow-gray-400 cursor-pointer transition-transform ease-in-out duration-[1s] hover:scale-[1.05]'>
                                <img
                                    src={Project.picture}
                                    alt={`Web Pick Of ${Project.name}`}
                                    className='w-[100%] h-[28vh] object-cover object-left lg:h-auto rounded-t-[30px]'
                                />
                                <div className='flex flex-col lg:flex-row w-full py-6 px-6'>
                                    <div className='w-[100%] flex flex-col items-center lg:items-start'>
                                        <div className='w-full flex items-center justify-center lg:grid lg:grid-cols-[70%,30%]'>
                                            <h3 className='text-2xl lg:text-3xl font-[600] josefin-font'>{Project.name}</h3>
                                            <div className='w-full mt-2 lg:mt-0 hidden lg:flex items-center justify-center lg:justify-end'>
                                                <h4 className='px-4 py-2 rounded-[100px] bg-stone-200 font-[600]'>{Project.date}</h4>
                                            </div>
                                        </div>
                                        <h3 className='text-[1.3rem] lg:text-[1.1vw] font-[600]'>{Project.type}</h3>
                                        <h3 className='text-[1.2rem] lg:text-[1.1vw]'>{Project.software}</h3>
                                    </div>
                                    <div className=' w-[100%] lg:hidden mt-2 lg:mt-0 flex items-center justify-center lg:justify-end'>
                                        <h4 className='px-4 py-2 rounded-[100px] bg-stone-200 font-[600]'>{Project.date}</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
            </div>
            <a className='border-1 border-stone-400 rounded-[15px] bg-stone-200 px-6 pt-[1.25%] pb-[0.75%] text-2xl josefin-font font-bold capitalize w-fit mx-auto mt-5 transition ease-in-out duration-[0.5s] hover:scale-[1.1]' href='/contact-schedule'>
                Let's Develop Together
            </a>

        </div>

        </>
    );
}

export default ProjectsPage