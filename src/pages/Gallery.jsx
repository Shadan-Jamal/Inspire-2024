import React, { useState } from 'react';
import { motion, useIsPresent } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Bats from '../components/Bats';

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
    <main className="bg-black h-[100dvh] w-screen overflow-hidden">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, display: 'none' }}
        transition={{ duration: 3.1, ease: 'easeOut' }}
        className="relative h-screen w-screen"
        id="image-contents"
      >
        {/* Main Image Section */}
        <div className="absolute z-10" id="main-image-container">
          <LazyLoadImage
            src={mainImage}
            alt="main"
            loading="lazy"
            className="w-screen h-screen object-contain landscape:object-contain landscape:md:object-contain brightness-[0.95] md:brightness-100"
            id="main-image"
          />
        </div>

        {/* Sliding Images Section */}
        <div
          id="slide-path"
          className="absolute md:start-1/4 bottom-10 md:bottom-0 z-20 w-full lg:w-6/12 overflow-x-scroll before:content-[''] before:absolute before:w-12 before:h-[83%] before:top-0 before:left-0 before:z-10 before:bg-gradient-to-l before:from-transparent landscape:bottom-2 landscape:opacity-70 landscape:md:bottom-0 landscape:md:opacity-100"
        >
          <motion.div
            id="sliding-images"
            className="relative flex flex-row gap-3 mb-7 w-full"
          >
            {Array.from({ length: 38 }).map((_, index) => (
              <LazyLoadImage
                key={`img-${index}`}
                loading="lazy"
                src={`./Images/${index + 1}.jpg`}
                className="w-48 h-32 md:w-20 md:h-32 object-contain rounded-md opacity-50 hover:opacity-100 transition-opacity duration-500 ease-in-out landscape:w-28 landscape:md:w-48 landscape:md:h-32"
                onClick={handleImageClick}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {!isPresent && (
        <motion.div
          initial={{ display: 'none' }}
          animate={{ display: 'block' }}
          transition={{ ease: 'easeIn', duration: 3 }}
          className="absolute inset-0"
        >
          <Bats />
        </motion.div>
      )}
    </main>
  );
};

export default ImageSlider;
