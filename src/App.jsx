import { Routes, Route } from 'react-router-dom'
import { Home, Destinations, About, Contact } from './pages/index'
import MainLayout from './layouts/MainLayout'
import Footer from './components/shared/Footer'
import NavBar from './components/shared/NavBar'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> 
      </Route>
    </Routes>
  )
}

export default App
