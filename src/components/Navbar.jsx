import React, {useEffect, useState } from 'react'
import {motion, AnimatePresence, useAnimate, stagger} from 'framer-motion';
import { GiLanternFlame } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
function Navbar() {
    const [click,setClick] = useState(false);
    const [hovering, setHovering] = useState({
        link1 : false,
        link2: false,
        link3: false,
        link4: false,
        link5: false,
        link6: false,
    });
    const [navScope,navAnimate] = useAnimate();
    const [nav,openNav] = useState(false);

    const navClicked = () => {
        if(window.innerWidth >= 800){
            setClick(!click);
        }
        else if(window.innerWidth < 800){
            openNav(!nav);
        }
    }

    useEffect(() => {
        if(nav){
            navAnimate("div",{x : '0'}, {duration: 1, delay : stagger(0.2),ease : 'circInOut', type : 'spring', stiffness : 100})
        }
    },[nav])

  return (<>
  <motion.div 
    id='navbar'
    className='fixed top-0 w-screen h-16 lg:px-10 flex flex-row justify-around items-center text-white z-50'>
        <div 
        className={`justify-self-start w-[50%] lg:w-[25%] header-font text-[30px]`}>
            <h1>Inspire</h1>
        </div>

        {window.innerWidth >= 800 && <div id='links' className='flex flex-row justify-center items-center gap-5 w-[50%]'>
            <AnimatePresence>
            {click && <motion.div
            className='flex flex-row justify-end items-center gap-5 overflow-hidden header-font text-2xl'>
                    <NavLink to={"/"}>
                        <motion.a
                        to="/"
                        onMouseEnter={() => setHovering({...hovering,link1 : true})}
                        onMouseLeave={() => setHovering({...hovering,link1 : false})}
                        initial={{y : 400}}
                        animate={{y: 0}}
                        exit={{y : 100}}
                        transition={{ease: 'easeInOut',delay : 0.1,  duration : 0.1, type : 'spring' , stiffness : 40}}  
                        className='hover flex flex-col'  
                        href="">Home
                        <motion.span 
                        initial={{width : 0}}
                        animate={{width : `${hovering.link1 ? "100%" : 0}`}}
                        exit={{width : 0}}
                        className={`h-[2px] bg-[#ff4d00]`}></motion.span>
                        </motion.a>
                    </NavLink>
                    
                    <NavLink to={"/gallery"}>
                        <motion.a 
                        to="/gallery"
                        onMouseEnter={() => setHovering({...hovering,link2 : true})}
                        onMouseLeave={() => setHovering({...hovering,link2 : false})}
                        href=""
                        className='hover flex flex-col'                    initial={{y : 100}}
                        animate={{y: 0}}
                        exit={{y : 100}}
                        transition={{ease: 'easeInOut' ,delay : 0.3,  duration : 0.1, type : 'spring', stiffness : 40}}
                        >Gallery
                        <motion.span 
                        initial={{width : 0}}
                        animate={{width : `${hovering.link2 ? "100%" : 0}`}}
                        exit={{width : 0}}
                        className={`h-[2px] bg-[#ff4d00]`}></motion.span>
                        </motion.a>
                    </NavLink>

                    <NavLink to="/about">
                    <motion.a
                    onMouseEnter={() => setHovering({...hovering,link3 : true})}
                    onMouseLeave={() => setHovering({...hovering,link3 : false})}
                    className='hover flex flex-col'                    initial={{y : 100}}
                    animate={{y: 0}}
                    exit={{y : 100}}
                    transition={{ease: 'easeInOut' , delay : 0.5, duration : 0.1, type : 'spring', stiffness : 40}}
                    >About
                    <motion.span 
                    initial={{width : 0}}
                    animate={{width : `${hovering.link3 ? "100%" : 0}`}}
                    exit={{width : 0}}
                    className={`h-[2px] bg-[#ff4d00]`}></motion.span>
                    </motion.a>
                    </NavLink>

                    <NavLink to={"/"}>
                    <motion.a 
                    onMouseEnter={() => setHovering({...hovering,link4 : true})}
                    onMouseLeave={() => setHovering({...hovering,link4 : false})}
                    href=""
                    className='hover flex flex-col'                    initial={{y : 100}}
                    animate={{y: 0}}
                    exit={{y : 100}}
                    transition={{ease: 'easeInOut' , delay : 0.7, duration : 0.1, type : 'spring', stiffness : 40}}
                    >Events
                    <motion.span 
                    initial={{width : 0}}
                    animate={{width : `${hovering.link4 ? "100%" : 0}`}}
                    exit={{width : 0}}
                    className={`h-[2px] bg-[#ff4d00]`}></motion.span>
                    </motion.a>
                    </NavLink>

                    <NavLink to={"/"}>
                    <motion.a 
                    onMouseEnter={() => setHovering({...hovering,link6 : true})}
                    onMouseLeave={() => setHovering({...hovering,link6 : false})}
                    className='hover flex flex-col'                    href=""
                    initial={{y : 100}}
                    animate={{y: 0}}
                    exit={{y : 100}}
                    transition={{ease: 'easeInOut' , delay : 0.9, duration : 0.1, type : 'spring', stiffness : 40}}
                    >Register
                    <motion.span 
                    initial={{width : 0}}
                    animate={{width : `${hovering.link6 ? "100%" : 0}`}}
                    exit={{width : 0}}
                    className={`h-[2px] bg-[#ff4d00]`}></motion.span>
                    </motion.a>
                    </NavLink>
            </motion.div>}  
            </AnimatePresence>
        </div>}    

    <motion.div className={`w-[50%] lg:w-[25%] flex justify-end absolute lg:relative`}>
        <motion.div className='w-10 h-10'
        onClick={navClicked}
        >
            <GiLanternFlame className={`${click || nav ? 'text-orange-600' : 'text-white'} object-contain h-full w-full transition-colors`} id='image' alt="" />
        </motion.div>
    </motion.div>
</motion.div>
{window.innerWidth < 800 && <div
    id={`${nav && 'navbar'}`} 
    className='w-screen h-screen bg-transparent absolute z-40'>
        <motion.div
        initial={{opacity : 0}}
        animate={{opacity:1}}
        exit={{opacity : 0}}
        transition={{ease : 'easeOut'}}
        ref={navScope}
        className='flex flex-col justify-center items-center py-16 header-font h-full'>
            <AnimatePresence>
                {nav && <>
                <motion.div
                initial={{x : '100vw'}} exit={{x : '-100vw'}} className='w-full h-[25%] flex justify-center items-center'>
                    <h2 className='text-white text-3xl'>Home</h2>
                </motion.div>
                <motion.div
                initial={{x : '-100vw'}} exit={{x : '100vw'}} className='w-full h-[25%] flex justify-center items-center'>
                    <h2 className='text-white text-3xl'>Gallery</h2>
                </motion.div>
                <motion.div
                initial={{x : '100vw'}} exit={{x : '-100vw'}} className='w-full h-[25%] flex justify-center items-center'>
                    <h2 className='text-white text-3xl'>About</h2>
                </motion.div>
                <motion.div
                initial={{x : '-100vw'}} exit={{x : '100vw'}} className='w-full h-[25%] flex justify-center items-center'>
                    <h2 className='text-white text-3xl'>Events</h2>
                </motion.div>
                <motion.div
                initial={{x : '100vw'}} exit={{x : '-100vw'}} className='w-full h-[25%] flex justify-center items-center'>
                    <h2 className='text-white text-3xl'>Registration</h2>
                </motion.div></>}
            </AnimatePresence>
        </motion.div>
    </div>}
  </>
  )
}

export default Navbar