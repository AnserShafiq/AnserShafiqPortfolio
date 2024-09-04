import React from 'react'
import { BiPhoneCall as Call} from "react-icons/bi";



const Header = () => {
  return (
    <div className='w-full absolute z-[100] flex flex-row justify-between items-center px-[5%] py-[2%] bg-zinc-800 border-b-[1px] border-zinc-900 shadow-sm '>
        <div>
            <button className='bg-[var(--goldenish-text-color)] lg:px-4 lg:py-2 lg:text-[1vw] font-[700] rounded-[100px] cursor-pointer  transition-transform duration-[0.5s] ease-in-out hover:scale-[1.05] '>
                Schedule A Project
            </button>
        </div>
        <div >
            <nav className='flex flex-row'>
                <h4 className='lg:text-[1.3vw] tracking-wider uppercase font-[700] mx-4 px-1 text-stone-300 font-[var(--josefin-font)] cursor-pointer transition-transform duration-[1s] ease-in-out hover:font-[800] hover:scale-[1.05] hover:border-b-2 hover: border-[var(--goldenish-text-color)] '>
                    About
                </h4>
                <h4 className='lg:text-[1.3vw] tracking-wider uppercase font-[700] mx-4 px-1 text-stone-300 font-[var(--josefin-font)] cursor-pointer transition-transform duration-[1s] ease-in-out hover:font-[800] hover:scale-[1.05] hover:border-b-2 hover: border-[var(--goldenish-text-color)] '>
                    Projects
                </h4>
                <h4 className='lg:text-[1.3vw] tracking-wider uppercase font-[700] mx-4 px-1 text-stone-300 font-[var(--josefin-font)] cursor-pointer transition-transform duration-[1s] ease-in-out hover:font-[800] hover:scale-[1.05] hover:border-b-2 hover: border-[var(--goldenish-text-color)] '>
                    Skills
                </h4>
            </nav>
        </div>
        <div>
            <button className='flex items-center bg-[var(--goldenish-text-color)] lg:px-4 lg:py-2 lg:text-[1vw] font-[700] rounded-[100px] cursor-pointer  transition-transform duration-[0.5s] ease-in-out hover:scale-[1.05] ' onClick={() => window.location.href = 'tel:+923248505960'}>
                <Call className='mr-2 text-[1.4vw] '/> (324) 850 5960
            </button>
        </div>
    </div>
  )
}

export default Header