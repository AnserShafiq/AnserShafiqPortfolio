import React from 'react'
import { AiFillCopyrightCircle as Copyright} from "react-icons/ai";

const Footer = () => {
  return (
    <div className='w-full static z-[100] flex flex-col justify-center items-center px-[5%] pt-[2%] pb-[1%] shadow-sm '>
        <h2 className='text-[8vw] sticky bottom-[5%] uppercase lg:leading-[90%] font-bold josefin-font'>Anser Shafiq</h2>
        <h3 className='text-[1.3vw] uppercase font-[600] flex items-center'><Copyright className='mb-[-1.5%] mr-2'/> 2024 All right reserved</h3>
    </div>
  )
}

export default Footer