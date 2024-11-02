import React, {useEffect, useState } from 'react'
import {motion, AnimatePresence, useAnimate, stagger} from 'framer-motion';
import { GiLanternFlame } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
function Navbar() {
    const [hovering, setHovering] = useState({
        link1 : false,
        link2: false,
        link3: false,
        link4: false,
        link5: false,
        link6: false,
    });
    const [click,setClick] = useState(false);
    const [navScope,navAnimate] = useAnimate();
    const [nav,openNav] = useState(false);

    const navClicked = () => {
        console.log(window.innerWidth)
        if(window.innerWidth >= 800){
            console.log(window.innerWidth)
            console.log("running inside setclick")
            setClick(!click);
        }
        else if(window.innerWidth < 800){
            openNav(!nav);
        }
    }

    useEffect(() => {
        if(nav){
            navAnimate("div",{x : '0'}, {delay:stagger(0.1), type : 'spring', stiffness : 140})
        }
    },[nav])

  return (<>
  <motion.div 
    id='navbar'
    className='fixed top-0 w-screen h-16 lg:px-10 flex flex-row justify-around items-center text-white z-20 px-10'>
        <div 
        className={`justify-self-start w-[50%] lg:w-[25%] header-font text-[30px] `}>
            <h1>Inspire</h1>
        </div>

        {(window.innerWidth >= 800 && !nav) && <div id='links' className='flex flex-row justify-center items-center gap-5 w-[50%]'>
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

                    <NavLink to={"/events"}>
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

    <motion.div className={`w-[50%] lg:w-[25%] flex justify-end lg:relative `}>
        <motion.div className='w-10 h-10'
        // onTouchStart={() => window.innerWidth < 800 && navClicked()}
        onClick={navClicked}
        >
            <GiLanternFlame className={`${click || nav ? 'text-orange-600' : 'text-white'} object-contain h-full w-full transition-colors`} id='image' alt="" />
        </motion.div>
    </motion.div>
</motion.div>

{(window.innerWidth < 800 && nav) && <div
    id={`${nav && 'navbar'}`} 
    className='min-w-full h-screen bg-transparent absolute z-10 backdrop-blur-xl transition-all duration-500 ease-in-out'>
        <motion.div
        initial={{opacity : 0}}
        animate={{opacity:1}}
        exit={{opacity : 0}}
        transition={{ease : 'easeOut'}}
        ref={navScope}
        className='flex flex-col justify-center items-center py-16 header-font w- h-full'>
            <AnimatePresence>
                {nav && <>
                <motion.div
                initial={{x : '100vw'}} exit={{x : '-100vw'}} className='w-full h-[25%] flex justify-center items-center '>
                    <h2 className='text-red-500 text-3xl'>
                        <NavLink to="/" onClick={() => openNav(false)}>
                            Home
                        </NavLink>
                    </h2>
                </motion.div>

                <motion.div
                initial={{x : '-100vw'}} exit={{x : '100vw'}} className='w-full h-[25%] flex justify-center items-center '>
                    <h2 className='text-red-600 text-3xl'>
                    <NavLink to="/gallery" onClick={() => openNav(false)}>
                        Gallery
                    </NavLink>
                    </h2>
                </motion.div>

                <motion.div
                initial={{x : '100vw'}} exit={{x : '-100vw'}} className='w-full h-[25%] flex justify-center items-center '>
                    <h2 className='text-red-700 text-3xl'>
                    <NavLink to="/about" onClick={() => openNav(false)}>
                        About
                    </NavLink>
                    </h2>
                </motion.div>

                <motion.div
                initial={{x : '-100vw'}} exit={{x : '100vw'}} className='w-full h-[25%] flex justify-center items-center '>
                    <h2 className='text-red-800 text-3xl'>
                    <NavLink to="/" onClick={() => openNav(false)}>
                        Events
                    </NavLink>
                    </h2>
                </motion.div>

                <motion.div
                initial={{x : '100vw'}} exit={{x : '-100vw'}} className='w-full h-[25%] flex justify-center items-center '>
                    <h2 className='text-red-900 text-3xl'>
                    <NavLink to="/" onClick={() => openNav(false)}>
                        Registration
                    </NavLink>
                    </h2>
                </motion.div></>}
            </AnimatePresence>
        </motion.div>
    </div>}
  </>
  )
}

export default Navbar