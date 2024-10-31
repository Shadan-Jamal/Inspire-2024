import React,{useEffect} from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Gallery from './pages/Gallery'
import {ReactLenis} from 'lenis/react'
import { Routes , Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
function App() {
  const location = useLocation();
  return (
    <>
      <ReactLenis root>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Hero />} />
              <Route path='/gallery' element={<Gallery />}/>
              <Route path='/about' element={<About />}/>
          </Routes>
        </AnimatePresence>
      </ReactLenis>
    </>
  )
}

export default App