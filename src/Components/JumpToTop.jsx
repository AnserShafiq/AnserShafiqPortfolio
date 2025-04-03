import React, { useEffect, useState } from 'react'
import { FaCircleArrowUp } from 'react-icons/fa6';

const JumpToTop = () => {
    // const [scrollY, setScrollY] = useState(100);
    const [showBtn, setShowBtn]= useState(false);
    const PositionCheck = () => {
        // setScrollY(window.scrollY);
        if(window.scrollY > 400){
            setShowBtn(true);
        }else{
            setShowBtn(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', PositionCheck)
        return () => {
            window.removeEventListener('scroll', PositionCheck)
        }
    })

    const BackToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

  return (
    <div className={`fixed bottom-8 right-3 lg:bottom-10 lg:right-10 w-fit h-fit ${showBtn ? 'block':'hidden'}`}>
        <FaCircleArrowUp className='text-zinc-800 cursor-pointer transition-all ease-in-out duration-200 hover:scale-[1.03] text-4xl' onClick={BackToTop}/>
    </div>
  )
}

export default JumpToTop