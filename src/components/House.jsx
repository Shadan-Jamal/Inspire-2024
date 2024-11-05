import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from 'jquery';
import 'tailwindcss/tailwind.css';
import About from "../pages/About"

gsap.registerPlugin(ScrollTrigger);

const Inspire2K24 = () => {
  useEffect(() => {
    // GSAP animation
    gsap.timeline({
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: true,
        markers: false,
      },
    })
      .to('img', {
        scale: 2,
        z: 250,
        transformOrigin: 'center center',
        ease: 'power1.inOut',
      })
      .to('.hero-section', {
        scale: 1.4,
        transformOrigin: 'center center',
        ease: 'power1.inOut',
      }, '<');

    // jQuery for darkening background on scroll
    $(document).ready(function () {
      $.fn.darkenScroll = function () {
        var elem = $(this);
        $(window).on('scroll', function () {
          let scroll = $(document).scrollTop();
          let offsetTop = elem.offset().top + elem.outerHeight();
          let opacity = 1 / offsetTop * scroll;
          if (opacity > 0 && opacity < 1) {
            elem.css({ 'box-shadow': `10000px 0 0 0 rgba(0,0,0,${opacity}) inset`});
          }
        });
      };
      $('.wrapper').darkenScroll();
    });
  }, []);

  return (
    <>
      <div className="wrapper relative w-full overflow-hidden">
        <div className="intro absolute flex flex-col justify-center items-center w-full h-screen z-20 gap-10">
          <p className="text-6xl font-bold header-font tracking-wider text-red-600">INSPIRE 2K24</p>
          <h1 className="text-3xl header-font text-red-600 tracking-widest shadow-2xl">Inspiring you to something</h1>
        </div>
        <div className="content overflow-hidden">
          <section className="section hero-section w-full h-screen bg-cover bg-center bg-no-repeat mix-blend-darken" style={{ backgroundImage: 'url("/HOUSE.jpeg")'}}></section>
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

export default Inspire2K24;