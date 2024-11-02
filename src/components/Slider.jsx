import React, { useState } from 'react'
import {motion} from 'framer-motion'

function Slider() {
  const [hovering,setHovering] = useState({
    heading1 : false, heading2 : false, heading3: false})

    const handle = () => {
      console.log("running")
    }
    
  return (
    <div className='w-[50%] flex flex-col justify-center items-center max-h-fit gap-6'>
        <motion.div
          onTouchStart={handle}
          onMouseEnter={() => setHovering({...hovering, heading1 :true})}
          onMouseLeave={() => setHovering({...hovering,heading1 :false})}
          className='w-full text-end pe-8 header-font text-[50px] flex flex-row justify-center items-center gap-6 relative'>
          <motion.span
          animate={{width : `${hovering.heading1 ? '100%' : '0'}`}}
          transition={{duration: 0.3, ease: 'easeInOut'}}
          className={`absolute left-0 -z-40 h-full bg-white`}
          ></motion.span>
          <h1 className={`${hovering.heading1 ? 'text-black' : 'text-white'} transition-colors`}>PARTICIPATE</h1>
        </motion.div>
        <motion.div
            onMouseEnter={() => setHovering({...hovering,heading2 :true})}
            onMouseLeave={() => setHovering({...hovering,heading2 :false})}
            className='w-full text-end pe-8 header-font text-[50px] flex flex-row justify-center items-center gap-6 relative'>
            <motion.span
            animate={{width : `${hovering.heading2 ? '100%' : '0'}`}}
            transition={{duration: 0.3, ease: 'easeInOut'}}
            className={`absolute left-0 -z-40 h-full bg-white`}
            ></motion.span>
            <h1 className={`${hovering.heading2 ? 'text-black' : 'text-white'} transition-colors`}>EXPERIENCE</h1>
        </motion.div>
        <motion.div
            onMouseEnter={() => setHovering({...hovering,heading3 :true})}
            onMouseLeave={() => setHovering({...hovering,heading3 :false})}
            className='w-full text-end pe-8 header-font text-[50px] flex flex-row justify-center items-center gap-6 relative'>
            <motion.span
            animate={{width : `${hovering.heading3 ? '100%' : '0'}`}}
            transition={{duration: 0.3, ease: 'easeInOut'}}
            className={`absolute left-0 -z-40 h-full bg-white`}
            ></motion.span>
            <h1 className={`${hovering.heading3 ? 'text-black' : 'text-white'} transition-colors`}>INSPIRE</h1>
        </motion.div>
    </div>
  )
}

export default Slider