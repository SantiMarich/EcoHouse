import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [images, isTransitioning]);

  const handlePrevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 200);
    }
  };

  const handleNextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 200);
    }
  };

  return (
    <div className="relative flex justify-center items-center ">
      <div className="relative overflow-hidden w-full object-cover rounded-lg h-[300px] md:h-[500px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } duration-700 ease-in-out w-full h-full`}
            data-carousel-item
          >
            <img
              src={image}
              className="flex h-full w-full object-cover object-center top-0 left-0"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute z-10 left-0 right-0 flex justify-between items-center m-4">
        <button
          onClick={handlePrevSlide}
          className="flex items-center justify-center w-8 h-8 rounded-full text-md font-semibold text-white dark:bg-green-400/75 dark:hover:bg-green-300/75 group-focus:ring-4 dark:focus:ring-green-100/75 group-focus:outline-none"
          disabled={isTransitioning}
        >
          {<FaChevronLeft />}
        </button>
        <button
          onClick={handleNextSlide}
          className="flex items-center justify-center w-8 h-8 rounded-full text-md font-semibold text-white dark:bg-green-400/75 dark:hover:bg-green-300/75 group-focus:ring-4 dark:focus:ring-green-100/75 group-focus:outline-none"
          disabled={isTransitioning}
        >
          {<FaChevronRight />}
        </button>
      </div>
    </div>
  );
};

export default Carrousel;
