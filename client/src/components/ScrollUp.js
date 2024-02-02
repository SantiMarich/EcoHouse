// ScrollUpButton.js
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setIsVisible(scrollTop > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-24 right-1/2 transform translate-x-1/2 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        className="bg-green-400 text-white p-2 rounded-full focus:outline-none"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollUpButton;
