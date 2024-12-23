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
        link7: false,
    });
    const [click,setClick] = useState(false);
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
            navAnimate("div",{x : '0'}, {delay:stagger(0.1), type : 'spring', stiffness : 140})
        }
    },[nav])

  return (<>
  <motion.div 
    id='navbar'
    className='fixed top-0 w-screen h-16 lg:px-10 flex flex-row justify-around items-center text-white z-20 px-10 backdrop-blur-sm landscape:h-12 landscape:md:h-16'>
        <div 
        className={`justify-self-start w-[50%] lg:w-[25%] header-font text-[30px] `}>
            <h1>Inspire</h1>
        </div>

        {(window.innerWidth >= 800 && !nav) && <div id='links' className='flex flex-row justify-center items-center gap-5 w-[50%]'>
            <AnimatePresence>
            {click && <motion.div
            className='flex flex-row justify-end items-center gap-5 overflow-hidden header-font text-2xl'>
                    <NavLink to={"/"}>
                        <motion.p
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
                        </motion.p>
                    </NavLink>
                    
                    <NavLink to={"/gallery"}>
                        <motion.p 
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
                        </motion.p>
                    </NavLink>

                    {/* <NavLink to="/about">
                    <motion.p
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
                    </motion.p>
                    </NavLink> */}

                    <NavLink to={"/events"}>
                    <motion.p 
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
                    </motion.p>
                    </NavLink>

                    <motion.a
                    onMouseEnter={() => setHovering({...hovering,link6 : true})}
                    onMouseLeave={() => setHovering({...hovering,link6 : false})}
                    className='hover flex flex-col'                    href="https://linktr.ee/shadow1470"
                    target='_blank'
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

                    <motion.a
                    download 
                    onMouseEnter={() => setHovering({...hovering,link7 : true})}
                    onMouseLeave={() => setHovering({...hovering,link7 : false})}
                    className='hover flex flex-col'                    href="/TEAMS_INSPIRE.xlsx"
                    initial={{y : 100}}
                    animate={{y: 0}}
                    exit={{y : 100}}
                    transition={{ease: 'easeInOut' , delay : 1.1, duration : 0.1, type : 'spring', stiffness : 40}}
                    >Download Teams
                    <motion.span 
                    initial={{width : 0}}
                    animate={{width : `${hovering.link7 ? "100%" : 0}`}}
                    exit={{width : 0}}
                    className={`h-[2px] bg-[#ff4d00]`}></motion.span>
                    </motion.a>
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
                    <h2 className='text-red-300 text-3xl'>
                        <NavLink to="/" onClick={() => openNav(false)}>
                            Home
                        </NavLink>
                    </h2>
                </motion.div>

                <motion.div
                initial={{x : '-100vw'}} exit={{x : '100vw'}} className='w-full h-[25%] flex justify-center items-center '>
                    <h2 className='text-red-400 text-3xl'>
                    <NavLink to="/gallery" onClick={() => openNav(false)}>
                        Gallery
                    </NavLink>
                    </h2>
                </motion.div>

                <motion.div
                initial={{x : '100vw'}} exit={{x : '-100vw'}} className='w-full h-[25%] flex justify-center items-center '>
                    <h2 className='text-red-500 text-3xl'>
                    <NavLink to="/about" onClick={() => openNav(false)}>
                        About
                    </NavLink>
                    </h2>
                </motion.div>

                <motion.div
                initial={{x : '-100vw'}} exit={{x : '100vw'}} className='w-full h-[25%] flex justify-center items-center '>
                    <h2 className='text-red-600 text-3xl'>
                    <NavLink to="/events" onClick={() => openNav(false)}>
                        Events
                    </NavLink>
                    </h2>
                </motion.div>

                <motion.div
                initial={{x : '100vw'}} exit={{x : '-100vw'}} className='w-full h-[25%] flex justify-center items-center '>
                    <h2 className='text-red-700 text-3xl'>
                    <a to="/" href='https://linktr.ee/shadow1470' target='_blank' onClick={() => openNav(false)}>
                        Registration
                    </a>
                    </h2>
                </motion.div>
                <motion.div
                initial={{x : '100vw'}} exit={{x : '-100vw'}} className='w-full h-[25%] flex justify-center items-center '>
                    <h2 className='text-red-700 text-3xl'>
                    <a href='/TEAMS_INSPIRE.xlsx' download>
                        Download Teams
                    </a>
                    </h2>
                </motion.div>
                
                </>
                }
            </AnimatePresence>
        </motion.div>
    </div>}
  </>
  )
}

export default Navbar