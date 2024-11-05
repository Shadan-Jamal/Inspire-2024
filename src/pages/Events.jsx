import React, { useRef, useState } from 'react'
import { EventsSideBar } from '../EventsSideBar';
import { EventsInfo } from '../EventsInfo';
import { motion,AnimatePresence } from 'framer-motion'

const Events = () => {
  const [events,viewEvents] = useState(false);
  const eventIndex = useRef(-1);
  return (
    <div className='w-screen h-screen'>
        <div id='hero-section' className='flex flex-row justify-center items-center w-full h-full py-14 relative'>
            <motion.div
            className={`${events ? 'w-[90%]' : 'w-[80%]'} h-full bg-zinc-900 flex flex-row justify-center items-center rounded-xl transition-[width] border-[2px] border-rose-500 relative`}>
                <motion.div
                  onClick={() => viewEvents(!events)}
                  whileTap={{scale : 1.2}}
                  whileHover={{scale : 1.2 , backgroundColor : 'white' , color : 'black', transition : {duration : 0.1}}}
                  className='absolute top-5 right-5 bg-black rounded-full px-4 py-1 text-white events-font tracking-widest'>
                    <button className='text-xl'>{!events ? 'View Events' : 'Close'}</button>
                </motion.div>
                {/* {EventsInfo.filter((item,index) => {
                  return <motion.div>
                    <p>{item === eventIndex.current}</p>
                  </motion.div>
                })} */}
            </motion.div>

            <AnimatePresence>
            {events && <motion.div 
            initial={{x : "100%"}}
            animate={{x : 0}}
            exit={{x : "100%"}}
            transition={{ease : 'circIn', duration : 0.2}}
            className='w-[30%] h-full bg-zinc-200 rounded-xl flex flex-col justify-center items-center'>
              {EventsSideBar.map((item,index) => {
                return <motion.div
                key={index}
                ref={eventIndex}
                onClick={() => eventIndex.current = index}
                whileHover={{backgroundColor : 'black', color : 'white', scale : 1.1, originX : 0}}
                whileTap={{backgroundColor : 'black', color : 'white', scale : 1.2, originX : 0}}
                className='w-full h-fit flex justify-start items-center gap-6 border-b-[1px] border-black px-3 hover:cursor-pointer'
                >
                  {item.icon}
                  <p className='text-6xl events-font tracking-wider'>{item.name}</p>
                </motion.div>
              })}
            </motion.div>}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default Events