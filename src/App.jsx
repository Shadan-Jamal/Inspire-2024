import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import House from './components/House'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import {ReactLenis} from 'lenis/react'
import { Routes , Route, useLocation } from 'react-router-dom'
import {motion, AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation();
  return (
    <>
      <ReactLenis root>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
              <Route path='/' element={<motion.div
              initial={{opacity : 0}}
              animate={{opacity : 1}}
              exit={{opacity : 0}}
              >
              <House />
              </motion.div>} />
              <Route path='/gallery' element={<Gallery />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/events' element={<Events />}/>
          </Routes>
        </AnimatePresence>
      </ReactLenis>
    </>
  )
}

export default App