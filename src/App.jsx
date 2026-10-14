import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Inicio from './pages/Inicio.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path = "/" element={<Home />}/>
        <Route path = "/inicio" element={<Inicio />}/>
      </Routes>
    </>
  )
}

export default App
