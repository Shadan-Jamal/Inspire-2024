import React, { useRef, useState } from 'react'
import { EventsSideBar } from '../EventsSideBar';
import { EventsInfo } from '../EventsInfo';
import { motion, AnimatePresence } from 'framer-motion'

const Events = () => {
  const [events,viewEvents] = useState(false);
  const [eventInfo, setEventInfo] = useState([{heading : ``, timing : ``,rules : ``, coordinators : ``, numbers : ``}]);
  const [eventDetails, setEventDetails] = useState({seeCoordinators : false, seePhoneNumber : false});
  const add = useRef(null);


  const eventSelect = (index) => {
      const eventIndex = index;
      const example = EventsInfo.filter((item,index) => {
        return index === eventIndex;
      })
      setEventInfo(example)
  }

  return (
    <div className='w-screen h-[100dvh]'>
        <div id='hero-section' className='flex flex-row justify-center items-center w-full h-full pt-16 md:py-16 relative'>
            <motion.div
            className={`${events ? 'md:w-[80%]' : 'md:w-[90%]'} w-[95%] h-full bg-zinc-900 flex flex-row justify-center items-center rounded-xl transition-[width] border-[2px] border-rose-500 relative px-4 overflow-x-hidden`}>
                <motion.div
                  onClick={() => viewEvents(!events)}
                  whileTap={{scale : 1.2}}
                  whileHover={{scale : 1.2 , backgroundColor : 'white' , color : 'black', transition : {duration : 0.1}}}
                  className='absolute top-5 right-5 bg-black rounded-full px-4 py-1 text-white events-font tracking-widest'>
                    <button className='text-xl'>{!events ? 'View Events' : 'Close'}</button>
                </motion.div>

                {/* Showing Selected Event */}
                {eventInfo[0].rules.length > 1 ? eventInfo.map((item,index) => {
                  return <motion.div key={index} className='events-font flex flex-col justify-around md:justify-around items-start w-full h-full md:h-full py-5 border-rose-500 px-2'>
                    <motion.div
                    className='w-full h-fit  md:space-y-3 border-b-[2px] border-rose-500 pb-2 px-3 md:px-5'
                    >
                      <div className=''>
                      <h1 className='text-4xl md:text-6xl text-white tracking-widest'>{item.heading}</h1>
                      </div>
                      <span className='text-xl md:text-3xl text-white tracking-wider'>{item.timing}</span>
                    </motion.div>

                    <div className='w-fit max-h-fit px-2 md:mt-2'><h5 className='text-white text-3xl md:text-4xl text-start'>Rules</h5></div>

                    <motion.div className='w-full md:grow max-h-[70%] md:max-h-[60%] flex flex-col md:flex-row justify-center items-start gap-5 py-2 md:py-1 px-2 border-b-[2px] border-b-rose-500 overflow-y-auto'
                    >
                      <div className='w-full md:w-[80%] h-[80%] md:h-full px-3 border-e-[2px] border-rose-500 overflow-y-auto'>
                        <motion.p className='text-white text-xl md:text-3xl tracking-[2px] whitespace-pre-line'>
                          {item.rules}
                        </motion.p>
                      </div>
                      <div className='w-full md:w-[20%] h-[20%] md:h-full overflow-y-auto'>
                        <motion.button
                        onClick={() => setEventDetails({...eventDetails, seeCoordinators : !eventDetails.seeCoordinators})}
                        whileHover={{scale : 1.1, color : 'black', backgroundColor : 'white'}} 
                        whileTap={{scale : 1.1, color : 'black', backgroundColor : 'white'}} 
                        className='px-2 py-1 md:px-2 md:py-2 rounded-xl text-white bg-black text-base md:text-xl tracking-widest'> Check Coordinators
                        </motion.button>

                        {eventDetails.seeCoordinators && <motion.p 
                        initial={{opacity : 0}}
                        animate={{opacity : 1}}
                        transition={{duration : 0.5, type: 'tween'}}
                        className={`text-white text-xl md:text-3xl md:whitespace-pre-line ${window.innerWidth < 500  && 'flex flex-row'}`}>
                          {item.coordinators}
                        </motion.p>}
                      </div>
                    </motion.div>

                    <motion.div 
                    className='w-fit h-fit mt-1 flex justify-start gap-3 '>
                    <motion.button
                    onClick={() => setEventDetails({...eventDetails, seePhoneNumber : !eventDetails.seePhoneNumber})}
                    whileHover={{scale : 1.1, color : 'black', backgroundColor : 'white'}} 
                    whileTap={{scale : 1.1, color : 'black', backgroundColor : 'white'}} 
                    className='px-2 py-1 rounded-2xl text-white bg-black text-xl tracking-wider'>Contact</motion.button>
                      {eventDetails.seePhoneNumber && <motion.p
                      initial={{opacity : 0,scaleY : 0}}
                      animate={{opacity : 1,scaleY : 1}}
                      transition={{duration : 0.5, type: 'tween'}}
                      className='text-3xl text-white tracking-wider'>
                      {item.numbers}  
                      </motion.p>}
                    </motion.div>
                  </motion.div>
                }) : 
                <motion.div className='w-full h-full flex justify-center items-center'>
                  <h1 className='text-white text-6xl text-wrap events-font'>Check out all our events!</h1>
                </motion.div>
                }

            </motion.div>
              
            <AnimatePresence>
            {events && <motion.div 
            initial={{x : "100%"}}
            animate={{x : 0}}
            exit={{x : "100%"}}
            transition={{ease : 'anticipate', duration : 0.2}}
            className={`w-[35%] md:w-[30%] h-fit md:max-h-fit md:h-full bg-zinc-200 rounded-xl absolute right-0 py-3 flex flex-col md:overflow-x-hidden md:static md:flex md:flex-col md:justify-center md:items-center`}>
              {EventsSideBar.map((item,index) => {
                return <motion.div
                key={index}
                onClick={() => eventSelect(index)}
                whileHover={{backgroundColor : 'black', color : 'white', scale : 1.1, originX : 0}}
                whileTap={{backgroundColor : 'black', color : 'white', scale : 1.2, originX : 0}}
                className='w-full h-fit flex flex-row md:flex-row justify-start items-center gap-2 md:gap-6 border-e-[1px] border-e-black md:border-b-[1px] md:border-black px-3 hover:cursor-pointer'
                >
                  {item.icon}
                  <p className='text-xl md:text-5xl lg:text-6xl events-font tracking-wider text-start'>{item.name}</p>
                </motion.div>
              })}
            </motion.div>}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default Events