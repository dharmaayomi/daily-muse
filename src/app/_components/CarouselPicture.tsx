"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/organized.webp",
  "/worklifebalance.webp",
  "/reading1.webp",
  "/reading.webp",
];

const CarouselPicture: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full hidden md:inline max-w-3xl mx-auto">
      {/* Image Display */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            sizes=""
            className={`absolute inset-0 object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselPicture;
