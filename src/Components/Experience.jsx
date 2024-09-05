import React from 'react'

const Experience = () => {

    const experience = [
        {
            name: 'North American Staffing Services',
            position: 'Website Developer',
            description:'Demonstrated expertise in designing and developing websites by leveraging various modern technologies to deliver optimized and responsive digital solutions.',
            joined: '2024',
            end: 'Present',
            last: false,
        },{
            name: 'Developers Alley Co',
            position: 'WordPress Web Developer',
            description:`Specialized in the development, customization, and optimization of websites using WordPress, including extensive use of plugins and other tools to enhance site functionality and performance.`,
            joined: '2022',
            end: '2023',
            last: false,
        },{
            name: 'DevNation',
            position: 'Fellow Web Developer',
            description:'Developed a strong foundation in Full Stack Development by creating and implementing innovative web solutions, honing technical skills, and mastering industry best practices.',
            joined: '2021',
            end: '2022',
            last: true,
        }
    ]

    return (
        <div className='flex flex-col w-[90%] mx-auto py-[4%]'>
            <div className='flex flex-row mx-auto my-12' >
            <div className='w-[30%] flex static flex-col top-[30%]'>
                <h2 className='text-[4vw] sticky top-[10%] font-bold tracking-wide leading-[85%] italic text-zinc-900 josefin-font'>Experience<br/>Roadmap</h2>
            </div>
            
            <div className='grid w-[70%] grid-cols-1 gap-[2%]'>
                {experience.map((Company, index) =>(
                    <div key={index} className={`flex flex-col py-5 mx-5 ${Company.last ? '' : 'border-b-[1.25px] border-stone-300'}`}>
                        <h3 className='text-[1.8vw] font-bold josefin-font'>{Company.name}</h3>
                        <div className='flex flex-row  '>
                            <div className='flex flex-col ml-[0.25%]'>

                                <h3 className='text-[1.4vw] font-bold'>{Company.position}</h3>
                                <div className=' text-[1.3vw] font-semibold flex flex-row '>
                                    <h3>{Company.joined}</h3>
                                    <h3 className='mx-1'> - </h3>
                                    <h3>{Company.end}</h3>
                                </div>
                                <h3 className='text-[1.3vw] font-normal'>{Company.description}</h3>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>

        </div>
    )
}

export default Experience