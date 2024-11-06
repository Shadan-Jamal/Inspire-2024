import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'tailwindcss/tailwind.css';
import About from "../pages/About";

gsap.registerPlugin(ScrollTrigger);

const House = () => {
  useEffect(() => {
    // GSAP animation with ScrollTrigger
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: true,
        markers: false,
      },
    });

    timeline
      .to('img', {
        scale: 2,
        z: 250,
        transformOrigin: 'center center',
        ease: 'power1.inOut',
      })
      .to(
        '.hero-section',
        {
          scale: 1.4,
          transformOrigin: 'center center',
          ease: 'power1.inOut',
        },
        '<'
      );

    // Function to darken background on scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const elem = document.querySelector('.wrapper');
      const offsetTop = elem.offsetTop + elem.offsetHeight;
      const opacity = Math.min(1, scrollTop / offsetTop);

      elem.style.boxShadow = `10000px 0 0 0 rgba(0, 0, 0, ${opacity}) inset`;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to kill ScrollTrigger and remove event listeners on unmount
    return () => {
      if (timeline) {
        timeline.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="wrapper relative w-full overflow-hidden">
        <div className="intro absolute flex flex-col justify-center items-center w-full h-screen z-20 gap-10">
          <p className="text-6xl font-bold header-font tracking-wider text-red-600">INSPIRE 2K24</p>
          <h1 className="text-3xl header-font text-red-600 tracking-widest shadow-2xl">Inspiring you to something</h1>
        </div>
        <div className="content overflow-hidden">
          <section
            className="section hero-section w-full h-screen bg-cover bg-center bg-no-repeat mix-blend-darken"
            style={{ backgroundImage: 'url("/HOUSE.jpeg")' }}
          ></section>
          {/* <section className="section gradient-purple w-full h-[50vh]"></section> */}
        </div>
        <div className="image-container absolute top-0 left-0 right-0 w-full h-screen -z-50">
          <img src="/INSPIRE_2K24.jpeg" alt="Grass Image" className="w-full h-full object-cover md:object-contain" />
        </div>
      </div>
      <About />
    </>
  );
};

export default House;
