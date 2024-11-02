import React, {useEffect,useRef } from 'react';
import { motion, useAnimate,useIsPresent } from 'framer-motion';
import Slider from '../components/Slider'
import Bats from '../components/Bats'
function Hero() {
    const [scope, animate] = useAnimate();
    const leftLidRef = useRef(null);
    const rightLidRef = useRef(null);
    const isPresent = useIsPresent();

    useEffect(() => {
      if(window.innerWidth > 783){
        const handleMouseMove = (event) => {
          const { clientX, clientY } = event;
  
          // Calculate percentage position relative to the screen
          const xPercent = (clientX / window.innerWidth) * 2 - 1; // Range: -1 to 1
          const yPercent = (clientY / window.innerHeight) * 2 - 1; // Range: -1 to 1
    
          // Calculate new rotation based on X and tilt based on Y
          const newRotation = xPercent * 35; // Max rotation ±35 degrees
          const newTilt = yPercent * 30; // Max tilt ±35 degrees
      
          // Animate left and right eyelids based on the cursor
          animate(leftLidRef.current, { rotate: newRotation, skewY: newTilt }, { duration: 0.1} );
          animate(rightLidRef.current, { rotate: -newRotation, skewY: -newTilt }, { duration: 0.2 });
        };
    
        // Add mousemove event listener
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }
      // Cleanup event listener on unmount
    }, [animate]);

  return (
    <>
    <motion.section
    initial={{opacity : 0}}
    animate={{opacity : 1}}
    exit={{opacity : 0}}
    transition={{duration : 2.4, ease : 'easeOut'}}
    className="w-screen h-screen grid grid-cols-1 md:grid-cols-8">
      {/* Left Side */}
      {window.innerWidth > 780 && <div className="md:block md:col-span-2 h-full relative ">
        <div className='absolute top-1/2 left-[65%] -translate-x-1/2 -translate-y-[50%] w-1/2 h-72 flex justify-center'>
        <motion.div
        ref={leftLidRef}
        className='rounded-full absolute top-14 bg-white w-[70%] h-3'
        >
        </motion.div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%]'>
              <div className='rounded-full bg-white p-2'>
                  <motion.div 
                  className='rounded-full w-24 h-24 bg-white relative'>
                      <motion.div
                      className='rounded-full h-full bg-black w-full absolute z-10 text-white'
                      ></motion.div>
                      <div className='rounded-full w-4 h-4 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                      </div>
                  </motion.div>
              </div>
          </div>
        </div>
      </div>}

      {/* Logo Section */}
      <div className="col-span-4 flex flex-col justify-evenly items-center" id='logo'>
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=""
          >
          <p id='logo-img'
            className="text-[clamp(68px,_10vw,_220px)] 
            header-font text-red-800"
            >
            Inspire 2k24
          </p>
        </motion.div>
        <Slider />
      </div>

      {/* Right Side */}
      {window.innerWidth > 780 && <div className="md:block md:col-span-2 h-full relative">
        <div className='absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-[50%] w-1/2 h-72 flex justify-center'>
        <motion.div
        ref={rightLidRef}
        className='rounded-full absolute top-14 bg-white w-[70%] h-3'
        >
        </motion.div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%]'>
              <div className='rounded-full bg-white p-2'>
                  <motion.div 
                  className='rounded-full w-24 h-24 bg-white relative'>
                      <motion.div
                      className='rounded-full h-full bg-black w-full absolute z-10 text-white'
                      ></motion.div>
                      <div className='rounded-full w-4 h-4 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                      </div>
                  </motion.div>
              </div>
          </div>
        </div>
      </div>}
    </motion.section>
    {!isPresent && <motion.div
      initial={{display : 'none'}}
      animate={{display : 'block'}}
      transition={{ease : 'easeIn', duration : 2}}
      className='absolute inset-0'
      >
      <Bats/>
      </motion.div>
      } 
  </>
  );
}

export default Hero;
