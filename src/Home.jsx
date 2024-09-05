import React from 'react'
import Name from './Components/Name'
import Projects from './Components/Projects'
import About from './Components/About'
import Experience from './Components/Experience'
import Skills from './Components/Skills'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <Name />
        <Projects />
        <About />
        <Experience />
        <Skills />
        {/* <div className='h-[100vh]'></div> */}
    </div>
  )
}

export default Home