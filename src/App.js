import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Home'

const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App