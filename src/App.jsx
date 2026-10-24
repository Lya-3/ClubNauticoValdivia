import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from "./components/organisms/Header.jsx"
import Footer from "./components/organisms/Footer.jsx"
import Home from './pages/Home.jsx'
import Inicio from './pages/Inicio.jsx'
import InicioAdmin from './pages/InicioAdmin.jsx'
import Registro from './pages/Registro.jsx'
import Servicios from './pages/Servicios.jsx'
import Arriendos from './pages/Arriendos.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path = "/" element={<Home />}/>
        <Route path = "/inicio" element={<Inicio />}/>
        <Route path = "/inicio-admin" element={<InicioAdmin />}/>
        <Route path = "/registro" element={<Registro />}/>
        <Route path = "/servicios" element={<Servicios />}/>
        <Route path = "/arriendos" element={<Arriendos />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
