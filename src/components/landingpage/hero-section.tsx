"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import SearchForm from "./search-form";

export default function HeroSection({
  propertyImages,
  activeTab,
  setActiveTab,
}: {
  propertyImages: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === propertyImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [propertyImages.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {propertyImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="bg-cover bg-no-repeat bg-center w-full h-full"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="z-10 relative flex flex-col justify-center items-center px-4 h-full text-center">
        <h1 className="mb-6 max-w-4xl font-bold text-white text-4xl md:text-6xl lg:text-7xl">
          Find Your Dream Home
        </h1>
        <p className="mb-8 max-w-3xl text-white text-lg md:text-xl">
          Discover Your Dream Home in Kenya&apos;s Beautiful Cities, Starting at just Ksh. 5,000/month, with Exclusive
          Limited-Time Discounts!
        </p>

        {/* Action Buttons */}
        <div className="flex sm:flex-row flex-col gap-4 mb-8">
          <Button
            size="lg"
            variant={activeTab === "buy" ? "default" : "secondary"}
            className={`px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 ${
              activeTab === "buy"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("buy")}
          >
            Buy
          </Button>
          <Button
            size="lg"
            variant={activeTab === "rent" ? "default" : "secondary"}
            className={`px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 ${
              activeTab === "rent"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("rent")}
          >
            Rent
          </Button>
        </div>

        <SearchForm activeTab={activeTab} />
      </div>
    </div>
  );
}