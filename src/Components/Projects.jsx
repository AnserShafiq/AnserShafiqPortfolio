import React from 'react'

const Projects = () => {
    const my_projects = [
    {
        name: 'Labour Master Solutions',
        link: 'https://labourmaster.ca/',
        type: 'Recruitment Agency',
        picture: require('../Images/labour.PNG'),
        date: 'Sept/2024'
    },
    {
        name: 'Intellect Workforce',
        link: 'https://intellectworkforce.ca/',
        type: 'Recruitment Agency',
        picture: require('../Images/intellect.PNG'),
        date: 'Aug/2024'
    },
    {
        name: 'RybelX',
        link: 'https://rybelx.com/',
        type: 'Sports Brand',
        picture: require('../Images/labour.PNG'),
        date: 'June/2024'
    },
    {
        name: 'TM Staffing Services',
        link: 'https://tmstaffing.ca/',
        type: 'Recruitment Agency',
        picture: require('../Images/tm.PNG'),
        date: 'Feb/2024'
    },
    {
        name: 'Perfect HR',
        link: 'https://perfecthr.ca/',
        type: 'Recruitment Agency',
        picture: require('../Images/perfect.PNG'),
        date: 'Jan/2024'
    },
    {
        name: 'God Speed MBS',
        link: 'https://godspeedmbs.com/',
        type: 'Medical Billings',
        picture: require('../Images/godspeed.PNG'),
        date: 'Jan/2024'
    },
];

  return (
    <div id='projects-section' className='flex flex-col w-[90%] mx-auto mt-12' >
        <h2 className='text-[5vw] font-bold tracking-wide leading-[85%] italic text-zinc-900 josefin-font'>Featured<br/>Projects</h2>
        <div className='grid grid-cols-[48%,48%] gap-[3%] my-[3%]'>
            
            {my_projects.map((Project, index)=>
            <a href={Project.link}>
                <div key={index} className='flex flex-col w-full rounded-[30px] border-2 border-[#0000000a] shadow-md cursor-pointer transition-transform ease-in-out duration-[1s] hover:scale-[1.05]'>
                    <img src={Project.picture} alt={`Web Pick Of ${Project.name}`} className='w-[100%] rounded-t-[30px]'/>
                    <div className='flex flex-row w-full py-6 px-6'>
                        <div className='w-[70%] flex flex-col'>
                            <h3 className='text-[1.5vw] font-[600] josefin-font'>{Project.name}</h3>
                            <h3 className='text-[1.2vw]'>{Project.type}</h3>
                        </div>
                        <div className='w-[30%] flex items-center justify-end'>
                            <h4 className='px-4 py-2 rounded-[100px] bg-stone-200 font-[600]'>{Project.date}</h4>
                        </div>
                    </div>
                </div>
            </a>
            )}
            
        </div>
    </div>
  )
}

export default Projects