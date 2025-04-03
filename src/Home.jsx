import React, { useEffect, useState } from 'react'
import Name from './Components/Name'
import Projects from './Components/Projects'
import About from './Components/About'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import LetsWork from './Components/LetsWork'
import Loading from './Loading'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 4 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;
  return (
      <div className='flex flex-col'>
          <Name />
          <Projects />
          <About />
          <Experience />
          <Skills />
          <LetsWork />
      </div>
  )
}

export default Home