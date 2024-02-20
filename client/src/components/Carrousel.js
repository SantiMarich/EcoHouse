// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Carrousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const handlePrevSlide = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setCurrentIndex((prevIndex) =>
//         prevIndex === 0 ? images.length - 1 : prevIndex - 1
//       );
//       setTimeout(() => setIsTransitioning(false), 200);
//     }
//   };

//   const handleNextSlide = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//       setTimeout(() => setIsTransitioning(false), 200);
//     }
//   };

//   return (
//     <div className="relative flex justify-center items-center w-full">
//       <div className="relative overflow-hidden w-full object-cover h-[300px] md:h-[500px]">
//         {images &&
//           images.map((image, index) => (
//             <div
//               key={index}
//               className={`${
//                 index === currentIndex ? "block" : "hidden"
//               } duration-700 ease-in-out w-full h-full`}
//               data-carousel-item
//             >
//               <img
//                 src={image}
//                 className="flex h-full w-full object-cover object-center top-0 left-0"
//                 alt={`Slide ${index + 1}`}
//               />
//             </div>
//           ))}
//       </div>
//       <div className="absolute z-10 left-0 right-0 flex justify-between items-center m-4">
//         <button
//           onClick={handlePrevSlide}
//           className="flex items-center justify-center w-8 h-8 rounded-full text-md font-semibold text-white dark:bg-green-500/75 dark:hover:bg-green-400/75 group-focus:ring-4 dark:focus:ring-green-100/75 group-focus:outline-none"
//           disabled={isTransitioning}
//         >
//           {<FaChevronLeft />}
//         </button>
//         <button
//           onClick={handleNextSlide}
//           className="flex items-center justify-center w-8 h-8 rounded-full text-md font-semibold text-white dark:bg-green-500/75 dark:hover:bg-green-400/75 group-focus:ring-4 dark:focus:ring-green-100/75 group-focus:outline-none"
//           disabled={isTransitioning}
//         >
//           {<FaChevronRight />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carrousel;

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Nuevo estado para controlar el modal
  const [selectedImage, setSelectedImage] = useState(null); // Estado para la imagen seleccionada

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

  const openModal = (index) => {
    setSelectedImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative flex justify-center items-center w-full">
      <div className="relative overflow-hidden w-full object-cover h-[300px] md:h-[500px]">
        {images &&
          images.map((image, index) => (
            <div
              key={index}
              className={`${
                index === currentIndex ? "block" : "hidden"
              } duration-700 ease-in-out w-full h-full`}
              data-carousel-item
              onClick={() => openModal(index)} // Manejar clic en la imagen
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
          className="flex items-center justify-center w-8 h-8 rounded-full text-md font-semibold text-white dark:bg-green-500/75 dark:hover:bg-green-400/75 group-focus:ring-4 dark:focus:ring-green-100/75 group-focus:outline-none"
          disabled={isTransitioning}
        >
          {<FaChevronLeft />}
        </button>
        <button
          onClick={handleNextSlide}
          className="flex items-center justify-center w-8 h-8 rounded-full text-md font-semibold text-white dark:bg-green-500/75 dark:hover:bg-green-400/75 group-focus:ring-4 dark:focus:ring-green-100/75 group-focus:outline-none"
          disabled={isTransitioning}
        >
          {<FaChevronRight />}
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-50 p-8">
          <div className="max-w-screen-lg w-full h-full p-4 bg-white relative">
            <img
              src={images[selectedImage]}
              alt={`Slide ${selectedImage + 1}`}
              className="w-full h-full"
            />
            <button
              className="absolute flex text-lg top-6 right-6 w-8 h-8 items-center justify-center text-center rounded-full text-md font-semibold text-white dark:bg-green-500/75 dark:hover:bg-green-400/75 group-focus:ring-4 dark:focus:ring-green-100/75 group-focus:outline-none"
              onClick={closeModal}
            >
              {<IoClose />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrousel;
