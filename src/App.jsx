import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Members from './pages/Members'
import Services from './pages/Services'
import Contact from './pages/Contact'
import DetailService from './pages/DetailService'

function App() {

  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route
          exact
          path='/'
          element={<Landing />}
        />
        <Route
          exact
          path='/members'
          element={<Members />}
        />
        <Route
          exact
          path='/services'
          element={<Services />}
        />
        <Route
          exact
          path='/services/:id'
          element={<DetailService />}
        />
        <Route
          exact
          path='/contact'
          element={<Contact />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
