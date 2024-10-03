import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Home'
import Footer from './Components/Footer'
import Contact from './Contact'

const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact-schedule' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App