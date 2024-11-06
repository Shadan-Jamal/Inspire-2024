import React, { useState } from 'react';
import { motion, useAnimate } from 'framer-motion';

function About() {
  const [click, setClick] = useState(false);
  const [scope, animate] = useAnimate();
  const [box1, animateBox1] = useAnimate();
  const [box2, animateBox2] = useAnimate();

  //Triggering the set of animations
  const clicked = async () => {
    setClick(true);
    await animate(scope.current ,
      {width : `${window.innerWidth < 600 ? '50%' : '35%'}` ,height : 1, padding : 0},
      { duration: 0.4, ease: 'circInOut', type: 'spring', stiffness : 100}
    )

    await animate(
      scope.current,
      { rotate: 90, width: `${window.innerWidth < 600 ? '70%' : '35%'}`, height : 1, padding : 0},
      { delay : 0.1, duration: 0.7, ease: 'circOut'}
    );

    const animation = { x:0, opacity :1};
    const trans = {duration:0.4, ease : 'easeIn' , type : 'spring'};

    // Animate the sections to appear.
    await animateBox1('#img-1', animation, trans);
    await animateBox1('#para-1', animation,trans);
    await animateBox2('#para-2', animation,trans);
    await animateBox2('#img-2', animation,trans);
  };

  return (
    <motion.div 
    initial={{opacity : 0}}
    animate={{opacity : 1}}
    transition={{duration : 2}}
    className="w-[100vw] h-screen grid grid-rows-4 place-content-center gap-24 lg:px-10 backdrop-blur-lg">
      {/* Header Section */}
      <motion.div 
      exit={{scale : 0}}
      transition={{duration : 0.5, type : 'keyframes'}}
      className="w-full h-fit text-center row-span-1 flex flex-col justify-center items-center mt-20 ">
        <h1 className="header-font text-red-600 text-[50px] lg:text-[70px]">About</h1>
        <motion.div
        initial={{width:0}}
        animate={{width : '100%'}}
        transition={{duration : 2, type: 'tween' , ease:'circInOut'}}
        className='w-full flex flex-row justify-center gap-5 shadow-2xl shadow-white'>
          <motion.span className='bg-red-700 h-[1px] w-[300px] lg:w-[500px] rounded-lg'></motion.span>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <div className="mt-8 row-span-3 w-screen h-[75%] flex flex-col justify-evenly items-center gap-10 lg:px-6 relative">
        {/* Left Content Section */}
        {click && (<motion.div ref={box1}
        className="w-full h-1/2 flex flex-row justify-end items-center px-3 lg:px-6 gap-10 ">
            <motion.div
              id="img-1"
              initial={{ x: 100, opacity: 0 }}
              exit={{x : '-300vw'}}
              className="w-1/2 h-fit flex justify-end"
              >
              <img src="/Images/11.jpg" className="w-[450px] h-[400px] object-contain" alt="" />
            </motion.div>
            <motion.div
            id="para-1" 
            initial={{ x: -100, opacity: 0 }} 
            exit={{x : '300vw' , transition : {ease  : 'circInOut'}}}
            className="w-1/2 h-fit">
              <motion.p className="text-pretty leading-4 lg:leading-7 text-slate-500 text-xl lg:text-[3vw] text-start lg:p-3 para-font">
                The Computer Science Department is proud to present Inspire 2k24, an exciting intra-departmental
                fest designed to ignite creativity, foster innovation, and challenge the technical wits of students. Inspire isn't just a festival—it’s a platform for growth, experimentation, and skill development, where students can step beyond the classroom to experience the thrill of competitive learning.
                <br />
                Packed with innovative events, Inspire offers participants the chance to explore the latest trends in
                technology, hone their problem-solving skills, and engage in hands-on challenges that push them to think
                outside the box.
              </motion.p>
            </motion.div>
          </motion.div>
        )}

        {/* Animated Line */}
        <motion.span
        exit={{scale : 0}}
        whileHover={{opacity : 0.5 , cursor : 'default'}}
          ref={scope}
          onClick={clicked}
          onTouchStart={clicked}
          className="absolute bg-white p-2 rounded-full header-font text-2xl">
          {!click && 'Click'}
        </motion.span>

        {/* Right Content Section */}
        {click && (<motion.div ref={box2} className="w-full h-1/2 flex flex-row justify-end items-center gap-12 px-3 lg:px-10 "> 
            <motion.div initial={{ x: 100, opacity: 0 }} exit={{x : '-300vw'}} id="para-2" className="w-1/2 h-fit">
              <motion.p className="text-balance leading-4 lg:leading-8 text-slate-500 text-xl lg:text-[3vw] text-end lg:p-3 para-font">
                Inspire 2k24 is more than just a competition—it’s an incubator for ideas and an opportunity to build connections with other budding technologists. Every event is carefully curated to test critical thinking, analytical abilities, and technical skills, ensuring that participants leave with not just trophies but valuable insights and a refined skillset.
                <br />
                So gear up for an exhilarating experience at Inspire 2k24—a festival that celebrates the spirit of
                technology, challenges your limits, and prepares you for the future.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              exit={{x : ['50vw','300vw']}}
              id="img-2"
              className="w-1/2 h-fit flex justify-start"
            >
              <img src="/Images/9.jpg" className="w-[450px] h-[400px] object-contain" alt="" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default About;
