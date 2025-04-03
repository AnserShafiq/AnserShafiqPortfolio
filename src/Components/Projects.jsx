import React from 'react';

const Projects = () => {
    const my_projects = [
        {
            name: 'Work Horizon',
            link: 'https://www.workhorizon.pk/',
            type: 'Business Consulting & Services',
            picture: require('../Images/workhorizon.png'),
            date: 'March 2025',
            software: 'Next TS, React TS, MySQL',
        },
        {
            name: 'Talent Avenue',
            link: 'https://talentavenue.netlify.app/',
            type: 'Recruitment Agency',
            picture: require('../Images/talentavenue.png'),
            date: 'Dec 2024',
            software: 'React JS, Tailwind CSS, Firebase',
        },
        {
            name: 'Intellect Workforce',
            link: 'https://intellectworkforce.ca/',
            type: 'Recruitment Agency',
            picture: require('../Images/intellect.PNG'),
            date: 'Aug 2024',
            software: 'React JS, Firebase, CSS',
        },
        
    ];

    return (
        <div id='projects-section' className='flex flex-col items-center w-[90%] lg:w-[85vw] 2xl:w-[80vw] mx-auto mt-12 lg:mt-20 mb-14 lg:mb-8'>
            <h2 className='text-[2rem] lg:text-[3.4vw] font-bold tracking-wide leading-none lg:leading-[85%] italic text-zinc-900 josefin-font'>
                Featured Projects
            </h2>

            <div className='flex lg:grid flex-col lg:grid-cols-[30%,30%,30%] content-between place-content-center lg:gap-[3%] my-3 lg:my-6 pb-[7%] lg:pb-[3%]'>
                {my_projects
                    .map((Project, index) => (
                        <a className='my-[1rem] lg:my-0 lg:mt-4' key={index} href={Project.link}>
                            <div className='flex flex-col w-full rounded-[30px] border-2 border-[#0000000a] shadow-md shadow-gray-400 cursor-pointer transition-transform ease-in-out duration-[1s] hover:scale-[1.05]'>
                                <img
                                    src={Project.picture}
                                    alt={`Web Pick Of ${Project.name}`}
                                    className='w-[100%] h-[28vh] object-fit object-left lg:h-auto rounded-t-[30px]'
                                />
                                <div className='flex flex-col lg:flex-row w-full py-6 px-6'>
                                    <div className='w-[100%] flex flex-col items-center lg:items-start'>
                                        <div className='w-full flex items-center justify-center lg:grid lg:grid-cols-[70%,30%]'>
                                            <h3 className='text-2xl lg:text-3xl font-[600] josefin-font'>{Project.name}</h3>
                                            <div className='w-full mt-2 lg:mt-0 hidden lg:flex items-center justify-center lg:justify-end'>
                                                <h4 className='px-4 py-2 rounded-[100px] bg-stone-200 font-[600]'>{Project.date}</h4>
                                            </div>
                                        </div>
                                        <h3 className='text-xl lg:text-xl font-[600]'>{Project.type}</h3>
                                        <h3 className='text-lg lg:text-xl'>{Project.software}</h3>
                                    </div>
                                    <div className='w-full lg:hidden mt-2 lg:mt-0 flex items-center justify-center lg:justify-end'>
                                        <h4 className='px-4 py-2 rounded-[100px] bg-stone-200 font-[600]'>{Project.date}</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
            </div>
            <a href='/my-projects' className=' w-fit mt-0 lg:mt-5 mx-auto px-6 pt-[3%] lg:pt-[1.2%] pb-[1%] lg:pb-[0.75%] bg-stone-800 leading-none tracking-wider text-lg lg:text-2xl text-[var(--goldenish-text-color)] font-semibold josefin-font rounded-[50px] hover:bg-[var(--goldenish-text-color)] hover:text-stone-800 transition duration-300'>
                View All Projects
            </a>
        </div>
    );
};

export default Projects;
