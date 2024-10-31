import React, { useState, useEffect } from 'react';
import '../Gallery.css'; // Include your custom CSS styles if needed
import Bats from '../components/Bats';
import {motion, useIsPresent } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageSlider = () => {
  const [mainImage, setMainImage] = useState('./Images/1.jpg'); // Default main image
  const isPresent = useIsPresent();

  const handleImageClick = (e) => {
    e.preventDefault();
    const clickedImageSrc = e.target.getAttribute('src');
    setMainImage((prevImage) => {
      e.target.setAttribute('src', prevImage);
      return clickedImageSrc;
    });
  };

  return (
    <main className="bg-black h-screen w-screen">
      <motion.section 
      initial={{opacity : 0}}
      animate={{opacity : 1}}
      exit={{opacity : 0, display : 'none'}}
      transition={{duration : 2, ease : 'easeOut'}}
      className="relative h-screen w-screen" id="image-contents">
        {/* Main Image Section */}
        <div className="absolute z-10" id="main-image-container">
          <LazyLoadImage
            src={mainImage}
            alt="main"
            loading='lazy'
            className="w-screen h-screen object-contain brightness-[0.65] lg:brightness-100"
            id="main-image"
          />
        </div>

        {/* Sliding Images Section */}
        <div
          id="slide-path"
          className="absolute lg:start-1/4 bottom-0 z-20 w-full lg:w-6/12 overflow-hidden"
        >
          <div
            id="sliding-images"
            className="relative flex flex-row gap-3 mb-7 w-full *:hover:opacity-0"
          >
            {Array.from({ length: 38 }).map((_, index) => (
              <LazyLoadImage
                // effect='blur'
                key={`img-${index}`}
                loading='lazy'
                src={`./Images/${(index % 38) + 2}.jpg`}
                className="w-10 lg:w-20 h-32 object-cover rounded-md images opacity-50 hover:w-[208px] transition-[width,brightness] duration-500 ease-in-out"
                onClick={handleImageClick}
                onTouchStart={handleImageClick}
              />
            ))}
            {['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'].map((item,index) => {
              return <LazyLoadImage 
              key={index}
              className="w-20 h-32 object-cover rounded-md images opacity-50 hover:opacity-0"
              src={`./Images/${item}`}
              onClick={handleImageClick}
              />
            })
          }
          </div>
        </div>
        
      </motion.section>
      
      {!isPresent && <motion.div
      initial={{display : 'none'}}
      animate={{display : 'block'}}
      transition={{ease : 'easeIn', duration : 3}}
      className='absolute inset-0'
      >
        <Bats/>
      </motion.div>
      } 
    </main>
  );
};

export default ImageSlider;
