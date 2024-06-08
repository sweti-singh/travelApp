import React from 'react'
import HomePage from './components/HomePage/HomePage'
import Navbar from './components/Navbar/Navbar'
import Destinations from './components/Destinations/Destinations'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
