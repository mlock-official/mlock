"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slideImages = [
  "/slides/slide1.jpg",
  "/slides/slide2.jpg",
  "/slides/slide3.jpg",
  "/slides/slide4.jpg",
  "/slides/slide5.jpg",
];

const Phone = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-[278px] aspect-278/512 mx-auto flex items-center justify-center">
      {/* Slide Image */}
      <Image
        src={slideImages[currentSlide]}
        alt="Slide"
        fill
        sizes="278px"
        loading={currentSlide === 1 ? "eager" : "lazy"}
        className="object-contain z-0 pointer-events-none rounded-[50px]"
      />

      {/* Phone Frame */}
      <Image
        src="/phonebg4.png"
        alt="Phone Frame"
        height={500}
        width={350}
        className="object-contain z-10 pointer-events-none absolute"
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-20 text-white bg-[#18ee18] rounded-full p-1 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M16.707 4.707 9.414 12l7.293 7.293-1.414 1.414L6.586 12l8.707-8.707 1.414 1.414z"
            fill="white"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-20 text-white bg-[#18ee18] rounded-full p-1 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
            fill="white"
          />
        </svg>
      </button>

      {/* Green Dots */}
      <div className="absolute -bottom-8 z-20 flex gap-1 justify-center w-full">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-[#18ee18]' : 'bg-green-300'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Phone;