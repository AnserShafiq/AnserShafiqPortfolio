import React, { useState } from 'react'
import { BiPhoneCall as Call} from "react-icons/bi";
import { HashLink } from 'react-router-hash-link';
import { FiMenu as MenuBtn } from "react-icons/fi";
import { IoIosCloseCircle as CloseMenu } from "react-icons/io";



const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className='w-full absolute z-[100] px-[5%] py-[4%] lg:py-[2%] bg-zinc-800 border-b-[1px] border-zinc-900 shadow-sm '>
        <div className='flex flex-row justify-between items-center w-full lg:w-[85vw] 2xl:w-[80vw] mx-auto'>
            <div className='hidden lg:block'>
                <a href={'/contact-schedule'} className='flex items-center bg-transparent lg:bg-[var(--goldenish-text-color)] text-[var(--goldenish-text-color)] lg:text-[#000] lg:px-4 lg:py-2 text-[1.1rem] lg:text-[1vw] font-semibold lg:font-semibold lg:rounded-[100px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.05]'>
                    Schedule a Project
                </a>
            </div>
            <div className='hidden lg:block'>
                <nav className='flex flex-row'>
                    <h4  className='lg:text-[1.3vw] tracking-wider font-semibold mx-4 px-1 text-stone-300 font-[var(--josefin-font)] cursor-pointer transition-all duration-300 ease-in-out relative hover:scale-[1.02] border-b-2 border-transparent hover:border-[var(--goldenish-text-color)] '>
                        <HashLink smooth to={'/#about-me'} >
                            About
                        </HashLink>
                    </h4>
                    <h4 className='lg:text-[1.3vw] tracking-wider font-semibold mx-4 px-1 text-stone-300 font-[var(--josefin-font)] cursor-pointer transition-all duration-300 ease-in-out relative hover:scale-[1.02] border-b-2 border-transparent hover:border-[var(--goldenish-text-color)] '>
                        <HashLink smooth to={'/my-projects'} >
                            Projects
                        </HashLink>
                    </h4>
                    <h4 className='lg:text-[1.3vw] tracking-wider font-semibold mx-4 px-1 text-stone-300 font-[var(--josefin-font)] cursor-pointer transition-all duration-300 ease-in-out relative hover:scale-[1.02] border-b-2 border-transparent hover:border-[var(--goldenish-text-color)] '>
                        <HashLink smooth to={'/#my-skills'} >
                            Skills
                        </HashLink>
                    </h4>
                </nav>
            </div>
            <div className='flex justify-center items-center lg:hidden'>
                <MenuBtn className='text-[1.75rem] text-[var(--goldenish-text-color)]'  onClick={() => setMobileMenu(true)} />
            </div>
            <div>
                <button className='flex items-center bg-transparent lg:bg-[var(--goldenish-text-color)] text-[var(--goldenish-text-color)] lg:text-[#000] lg:px-4 lg:py-2 text-[1.1rem] lg:text-[1vw] font-semibold lg:font-semibold lg:rounded-[100px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.05]' onClick={() => window.location.href = 'tel:+923248505960'}>
                    <Call className='mr-2 text-[1.3rem] lg:text-[1.4vw] '/> (324) 850 5960
                </button>
            </div>
        </div>
        {/* Mobile menu */}
        <div
                className={`fixed top-0 left-0 z-10 flex flex-col justify-between w-[85%] h-[100vh] bg-zinc-800 px-6 py-10 transition-all duration-[0.5s] ease-in-out transform ${
                    mobileMenu ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
            >
                <div className='flex flex-row justify-between mb-10'>
                    <h2 className=' font-extrabold text-[var(--goldenish-text-color)] italic text-[3.7rem] leading-none tracking-wider font-[var(--josefin-font)] mt-[3rem] mb-[1rem]'>Anser<br/>Shafiq</h2>
                    <CloseMenu className='text-[2rem] text-[var(--goldenish-text-color)]' onClick={() => setMobileMenu(false)} />
                </div>
                <nav className='flex flex-col h-[55%]'>
                <h4  className='text-[2rem] tracking-wider font-[600] my-3 text-stone-300 josefin-font cursor-pointer transition-transform duration-[1s] ease-in-out hover:scale-[1.05] hover:border-b-2 hover: border-[var(--goldenish-text-color)] '>
                    <HashLink smooth to={'/#projects-section'} >
                        About
                    </HashLink>
                </h4>
                <h4 className='text-[2rem] tracking-wider font-[600] my-3 text-stone-300 josefin-font cursor-pointer transition-transform duration-[1s] ease-in-out hover:scale-[1.05] hover:border-b-2 hover: border-[var(--goldenish-text-color)] '>
                    <HashLink smooth to={'/#projects-section'} >
                        Projects
                    </HashLink>
                </h4>
                <h4 className='text-[2rem] tracking-wider font-[600] my-3 text-stone-300 josefin-font cursor-pointer transition-transform duration-[1s] ease-in-out hover:scale-[1.05] hover:border-b-2 hover: border-[var(--goldenish-text-color)] '>
                    <HashLink smooth to={'/#projects-section'} >
                        Skills
                    </HashLink>
                </h4>
            </nav>
            <a href='/contact-schedule' className='bg-[var(--goldenish-text-color)] text-[1.6rem] p-1 font-[600] rounded-[10px] cursor-pointer transition-transform duration-[0.5s] ease-in-out hover:scale-[1.05] '>
                Schedule A Project
            </a>
        </div>
    </div>
  )
}

export default Header