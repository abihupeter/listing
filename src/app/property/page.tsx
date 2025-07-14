/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PropertyTypeFilter } from "@/components/property/property-type-filter";
import { AllPropertyGrid } from "@/components/propertylisting/all-properties-grid";
import { FiltersModal } from "@/components/property/filters-modal";
import { Grid3X3, ArrowLeft, User } from "lucide-react";
import { Footer } from "@/components/footer";
import { useRouter } from "next/navigation";
import { ProfileSidebar } from "@/components/ui/profile-sidebar";

export default function PropertyPage() {
  const router = useRouter();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://kodinyumba.app/media/Stock/hd/Property/apartment1.jpg",
    "https://kodinyumba.app/media/Stock/hd/Property/apartment2.jpg",
    "https://kodinyumba.app/media/Stock/hd/Property/apartment3.jpg",
    "https://kodinyumba.app/media/Stock/hd/Property/apartment4.jpg",
    "https://kodinyumba.app/media/Stock/hd/Property/apartment5.jpg",
    "https://kodinyumba.app/media/Stock/hd/Property/apartment6.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f9fafb] min-h-screen">
      {/* Header */}
      <header className="top-0 z-50 sticky bg-white shadow-sm">
        <div className="mx-auto px-4 py-4 container">
          <div className="flex justify-between items-center">
            {/* Back button and Kodi logo */}
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push("/")}
                className="hover:bg-gray-100 hover:text-black transition-colors"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back
              </Button>

              <button
                onClick={() => router.push("/")}
                className="hover:opacity-80 font-fonarto font-bold text-[35px] text-blue-600 text-3xl transition"
              >
                Kodi
              </button>
            </div>

            {/* Filter Button + Profile Icon */}
            <div className="relative flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setIsFiltersOpen(true)}
                className="flex items-center gap-2"
              >
                <Grid3X3 className="w-4 h-4" />
                Filters
              </Button>

              <Button
                onClick={() => setIsProfileOpen((prev) => !prev)}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md text-white"
              >
                <User className="w-5 h-5 text-white" />
              </Button>

              <ProfileSidebar
                isOpen={isProfileOpen}
                onClose={() => setIsProfileOpen(false)}
              />
            </div>
          </div>
        </div>
        <PropertyTypeFilter />
      </header>

      {/* Main Layout Split */}
      <div className={`flex transition-all duration-300 ${isMapOpen ? "flex-row" : "flex-col"}`}>
        {/* Main Content */}
        <div className={`${isMapOpen ? "w-full md:w-[70%]" : "w-full"}`}>
          {/* Hero Banner */}
          <div className="mx-auto mt-10 mb-9 px-4 container">
            <div className="relative shadow-md rounded-2xl h-40 overflow-hidden">
              <img
                src={images[currentImage]}
                alt="Banner"
                className="w-full h-full object-cover transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                <h1 className="font-bold text-4xl md:text-5xl">ALL PROPERTIES</h1>
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div className="mx-auto px-4 container">
            <AllPropertyGrid limit={isMapOpen ? 6 : undefined} />
          </div>
        </div>

        {/* Map Section*/}
        {isMapOpen && (
          <div className="hidden md:block top-[100px] sticky self-start mr-4 w-full md:w-[40%] h-150">
            <div className="bg-white shadow-md mt-10 mb-200 rounded-xl h-[550px] overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Kasarani,%20Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        )}
      </div>

      {/* Toggle Map Button */}
      <div className="bottom-6 left-1/2 z-50 fixed -translate-x-1/2 transform">
        <Button
          onClick={() => setIsMapOpen(!isMapOpen)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg px-11 py-8 rounded-full text-white text-sm"
        >
          <img src="/images/map.png" alt="Map Icon" className="w-8 h-8" />
          {isMapOpen ? "Hide Map" : "Show Map"}
        </Button>
      </div>

      {/* Footer */}
      <Footer />

      {/* Filters Modal */}
      <FiltersModal isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
    </div>
  );
}
