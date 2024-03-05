import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Members from './pages/Members'

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
        <Route
          exact
          path='/members'
          element={<Members />}
        />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
