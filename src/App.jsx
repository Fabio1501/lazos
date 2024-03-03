import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <div className="">
      <NavBar/>
      <Routes>
        <Route
          exact
          path='/'
          element={<Landing />}
        />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
