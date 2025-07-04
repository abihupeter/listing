"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PropertyTypeFilter } from "@/components/property/property-type-filter";
import { PropertyGrid } from "@/components/property/property-grid";
import { FiltersModal } from "@/components/property/filters-modal";
import { AmenitiesModal } from "@/components/amenities-modal";
import { FacilitiesModal } from "@/components/facilities-modal";
import { Grid3X3, ChevronLeft, ChevronRight } from "lucide-react";
import { PhotoGalleryModal } from "@/components/photo-gallery-modal";
import { Footer } from "@/components/footer";
import router from "next/router";

export default function PropertiesPage() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false);
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMap, setShowMap] = useState(false);

  const images = Array.from(
    { length: 10 },
    (_, i) =>
      `https://kodinyumba.app/media/Stock/hd/Property/apartment${i + 1}.jpg`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const imageUrl = images[currentIndex];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
          <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Left side: Back button and Kodi logo */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => router.push("/")}
              className="flex items-center text-black hover:text-blue-700 font-medium"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back
            </button>

            <button
              onClick={() => router.push("/")}
              className="font-[fonarto] text-blue-600 text-3xl font-bold font- hover:opacity-90"
            >
              Kodi
            </button>
          </div>

          {/* Right side: Filter Button */}
          <Button
            variant="outline"
            onClick={() => setIsFiltersOpen(true)}
            className="flex items-center gap-2"
          >
            <Grid3X3 className="w-4 h-4" />
            Filters
          </Button>
        </div>
      </div>
      <PropertyTypeFilter />
    </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mt-10 mb-9">
  <div className="relative h-80 rounded-2xl overflow-hidden shadow-md">

        <img
          src={imageUrl}
          alt="Ruaraka Johari Apartments"
          className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <p className="mb-2 text-white text-lg">RUARAKA</p>
          <h1 className="mb-4 font-bold text-white text-4xl md:text-5xl">
            JOHARI APARTMENTS
          </h1>

          {/* Show/Hide Map Button */}
          <Button
            onClick={() => setShowMap((prev) => !prev)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 mb-4"
          >
            {showMap ? "Hide Map" : "Show Map"}
            <img src="/images/map.png" alt="Map Icon" className="w-8 h-8" />
          </Button>

          {/* Image Indicator Dots */}
          <div className="flex gap-1 mt-4">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-[2px] w-6 transition-colors duration-300 ${
                  index === currentIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Show all photos button - bottom right */}
        <div className="absolute bottom-4 right-4">
          <Button
            onClick={() => setIsGalleryOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Grid3X3 className="mr-2 w-4 h-4" />
            Show all photos
          </Button>
        </div>

        {/* Arrows */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/30"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/30"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      </div>

      {/* Embedded Google Map */}
      {showMap && (
        <div className="mx-4 mb-8 rounded-2xl overflow-hidden shadow-lg relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.856135156826!2d36.82194641531724!3d-1.2920651359951745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5ed5a27cd%3A0xe5a18760ea2237b2!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1719240600000!5m2!1sen!2ske"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            className="w-full h-[300px] rounded-2xl border-none"
          ></iframe>

          {/* Close Map Button */}
          <button
            onClick={() => setShowMap(false)}
            className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-sm text-white px-3 py-1 rounded-full shadow"
          >
            X
          </button>
        </div>
      )}

      {/* Tabs */}
      <div className="mx-auto mb-8 px-4 container">
        <div className="flex gap-4">
          <Button
            onClick={() => setIsAmenitiesOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Amenitiess
          </Button>
          <Button
            onClick={() => setIsFacilitiesOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Nearby Facilities
          </Button>
        </div>
      </div>

      {/* Property Grid */}
      <PropertyGrid />

      {/* Modals */}
      <FiltersModal
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
      />
      <AmenitiesModal
        isOpen={isAmenitiesOpen}
        onClose={() => setIsAmenitiesOpen(false)}
      />
      <FacilitiesModal
        isOpen={isFacilitiesOpen}
        onClose={() => setIsFacilitiesOpen(false)}
      />
      <PhotoGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={images}
      />

      <Footer />
    </div>
  );
}
