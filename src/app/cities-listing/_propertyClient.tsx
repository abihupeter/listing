
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PropertyTypeFilter } from "@/components/property/property-type-filter";
import { CityPropertyGrid } from "@/components/propertylisting/city-property-grid";
import { FiltersModal } from "@/components/property/filters-modal";
import { Grid3X3, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/footer";
import { AllPropertyGrid } from "@/components/propertylisting/all-properties-grid";

export default function PropertyClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCity = searchParams.get("city") || "All";

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
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
      <header className="top-0 z-40 sticky bg-white shadow-sm">
        <div className="mx-auto px-4 py-4 container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.back()}
                className="hover:bg-gray-100 hover:text-black transition-colors"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back
              </Button>

              <button
                onClick={() => router.push("/")}
                className="hover:opacity-90 font-fonarto font-bold text-blue-600 text-3xl"
              >
                Kodi
              </button>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsFiltersOpen(true)}
              className="flex items-center gap-2 shadow-sm border rounded-md font-semibold"
            >
              <Grid3X3 className="w-4 h-4" />
              Filters
            </Button>
          </div>

          <div className="mt-0">
            <PropertyTypeFilter />
          </div>
        </div>
      </header>

      <div className={`flex transition-all duration-300 ${isMapOpen ? "flex-row" : "flex-col"}`}>
        <div className={`${isMapOpen ? "w-full md:w-[60%]" : "w-full"}`}>
          <div className="mx-auto mt-10 mb-9 px-4 container">
            <div className="relative shadow-md rounded-2xl h-44 overflow-hidden">
              <img
                src={images[currentImage]}
                alt="Banner"
                className="w-full h-full object-cover transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                <h1 className="font-bold text-3xl md:text-5xl">ALL PROPERTIES</h1>
                {selectedCity && selectedCity !== "All" && (
                  <p className="mt-2 font-medium text-xl">
                    in <span className="capitalize">{selectedCity}</span>
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mx-auto px-4 container">
            <AllPropertyGrid />
          </div>
        </div>

        {isMapOpen && (
          <div className="hidden md:block bg-white shadow-inner w-full md:w-[40%]">
            <div className="mt-10 w-full h-full">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  selectedCity
                )},%20Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="rounded-none min-h-[500px] max-h-[800px]"
              ></iframe>
            </div>
          </div>
        )}
      </div>

      <div className="bottom-6 left-1/2 z-50 fixed -translate-x-1/2 transform">
        <Button
          onClick={() => setIsMapOpen(!isMapOpen)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg px-11 py-8 rounded-full text-white text-sm"
        >
          <img src="/images/map.png" alt="Map Icon" className="w-8 h-8" />
          {isMapOpen ? "Hide Map" : "Show Map"}
        </Button>
      </div>

      <Footer />
      <FiltersModal isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
    </div>
  );
}
