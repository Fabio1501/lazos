import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="bg-[#fffbeb]">
      <NavBar></NavBar>
      <Routes>
        <Route
          exact
          path='/'
          element={<Landing />}
        />
      </Routes>
    </div>
  )
}

export default App
