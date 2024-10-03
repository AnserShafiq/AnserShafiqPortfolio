import React, { useState } from 'react'

const Contact = () => {
  const [messageBody, setMessage] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    companyName: '',
    reason: '',
    location: '',
    details: '',
  })

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className='flex flex-col h-[100vh] w-[60%] mx-auto '>
      <div className='flex flex-col items-center mt-[15vh] py-[4%] w-[100%] h-[100%]'>
      <h2 className=' font-extrabold text-zinc-800 text-[2.8rem] lg:text-[3rem] uppercase leading-none text-center tracking-wider font-[var(--josefin-font)]'>Let's discuss your project</h2>
      <h2 className=' font-[500] text-zinc-800 lg:text-[1.3rem] capitalize mt-4 leading-tight text-center tracking-normal font-[var(--josefin-font)]'>My focus is on grasping your requirements and delivering a solution specifically designed to achieve your goals.</h2>
      <h2 className=' font-[500] text-zinc-800 lg:text-[1rem] capitalize mt-6 leading-tight text-center tracking-normal font-[var(--josefin-font)]'>Please provide your information, and I'll get in touch to schedule a time to meet.</h2>
      <form className='flex flex-col w-[60%] p-3'>
        <label>First Name</label>
        <input type='text' name='firstName' value={messageBody.firstName} onChange={handleChange}/>
      </form>
      </div>
    </div>
  )
}

export default Contact