import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Inicio from './pages/Inicio.jsx'
import InicioAdmin from './pages/InicioAdmin.jsx'
import Registro from './pages/Registro.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path = "/" element={<Home />}/>
        <Route path = "/inicio" element={<Inicio />}/>
        <Route path = "/inicio-admin" element={<InicioAdmin />}/>
        <Route path = "/registro" element={<Registro />}/>
      </Routes>
    </>
  )
}

export default App
