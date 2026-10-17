import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from "./components/organisms/Header.jsx"
import Footer from "./components/organisms/Footer.jsx"
import Home from './pages/Home.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path = "/" element={<Home />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
