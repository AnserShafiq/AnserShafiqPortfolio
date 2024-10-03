import React, { useState } from 'react';

const Projects = () => {
    const my_projects = [
        {
            name: 'Labour Master Solutions',
            link: 'https://labourmaster.ca/',
            type: 'Recruitment Agency',
            picture: require('../Images/labour.PNG'),
            date: 'Sept 2024',
            software: 'React JS, Tailwind CSS, Firebase',
            featured: true,
        },
        {
            name: 'Intellect Workforce',
            link: 'https://intellectworkforce.ca/',
            type: 'Recruitment Agency',
            picture: require('../Images/intellect.PNG'),
            date: 'Aug 2024',
            software: 'React JS, Firebase, CSS',
            featured: true,
        },
        {
            name: 'RybelX',
            link: 'https://rybelx.com/',
            type: 'Sports Brand',
            picture: require('../Images/rybelx.PNG'),
            date: 'June 2024',
            software: 'WordPress, WooCommerce',
            featured: true,
        },
        {
            name: 'TM Staffing Services',
            link: 'https://tmstaffing.ca/',
            type: 'Recruitment Agency',
            picture: require('../Images/tm.PNG'),
            date: 'Feb 2024',
            software: 'React JS, Firebase, CSS',
            featured: false,
        },
        {
            name: 'Perfect HR',
            link: 'https://perfecthr.ca/',
            type: 'Recruitment Agency',
            picture: require('../Images/perfect.PNG'),
            date: 'Jan 2024',
            software: 'WordPress',
            featured: false,
        },
        {
            name: 'God Speed MBS',
            link: 'https://godspeedmbs.com/',
            type: 'Medical Billings',
            picture: require('../Images/godspeed.PNG'),
            date: 'Jan 2024',
            software: 'WordPress',
            featured: true,
        },
    ];

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll); 
    };

    return (
        <div id='projects-section' className='flex flex-col w-[90%] mx-auto mt-12 mb-14 lg:mb-8'>
            <h2 className='text-[2.7rem] lg:text-[4vw] font-bold tracking-wide leading-none lg:leading-[85%] italic text-zinc-900 josefin-font'>
                Featured<br className=''/> Projects
            </h2>

            <div className='flex lg:grid flex-col lg:grid-cols-[48%,48%] lg:gap-[3%] my-3 pb-[7%] lg:pb-[3%]'>
                {my_projects
                    .filter((project) => showAll || project.featured) 
                    .map((Project, index) => (
                        <a className='my-[1rem] lg:my-0' key={index} href={Project.link}>
                            <div className='flex flex-col w-full rounded-[30px] border-2 border-[#0000000a] shadow-md cursor-pointer transition-transform ease-in-out duration-[1s] hover:scale-[1.05]'>
                                <img
                                    src={Project.picture}
                                    alt={`Web Pick Of ${Project.name}`}
                                    className='w-[100%] h-[28vh] object-cover object-left lg:h-auto rounded-t-[30px]'
                                />
                                <div className='flex flex-col lg:flex-row w-full py-6 px-6'>
                                    <div className='w-[100%] lg:w-[70%] flex flex-col items-center lg:items-start'>
                                        <h3 className='text-[1.6rem] lg:text-[1.5vw] font-[600] josefin-font'>{Project.name}</h3>
                                        <h3 className='text-[1.3rem] lg:text-[1.1vw] font-[600]'>{Project.type}</h3>
                                        <h3 className='text-[1.2rem] lg:text-[1.1vw]'>{Project.software}</h3>
                                    </div>
                                    <div className=' w-[100%] lg:w-[30%] mt-2 lg:mt-0 flex items-center justify-center lg:justify-end'>
                                        <h4 className='px-4 py-2 rounded-[100px] bg-stone-200 font-[600]'>{Project.date}</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
            </div>

            {showAll ? '' : (
                <button onClick={toggleShowAll} className=' w-fit mt-0 lg:mt-[4%] mx-auto px-6 pt-[3%] lg:pt-[1.2%] pb-[1%] lg:pb-[0.75%] bg-stone-800 leading-none tracking-wider text-[1.8rem] lg:text-[1.5vw] text-[var(--goldenish-text-color)] font-semibold josefin-font rounded-[50px] hover:bg-[var(--goldenish-text-color)] hover:text-stone-800 transition duration-300'>
                    View All Projects
                </button>
            )}


        </div>
    );
};

export default Projects;
