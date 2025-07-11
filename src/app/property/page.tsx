"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PropertyTypeFilter } from "@/components/property/property-type-filter";
import { AllPropertyGrid } from "@/components/propertylisting/all-properties-grid";
import { FiltersModal } from "@/components/property/filters-modal";
import { Grid3X3, ChevronLeft, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/footer";
import { useRouter } from "next/navigation";

export default function PropertyPage() {
  const router = useRouter();

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
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
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
                className="font-fonarto font-bold text-[35px] text-blue-600 text-3xl hover:opacity-80 transition"
              >
                Kodi
              </button>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsFiltersOpen(true)}
              className="flex items-center gap-2 border rounded-md shadow-sm font-semibold"
            >
              <Grid3X3 className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Property Type Filter */}
          <div className="mt-0">
            <PropertyTypeFilter />
          </div>
        </div>
      </header>

      {/* Main Layout Split */}
      <div className={`flex transition-all duration-300 ${isMapOpen ? "flex-row" : "flex-col"}`}>
        {/* Main Content */}
        <div className={`${isMapOpen ? "w-full md:w-[70%]" : "w-full"}`}>
          {/* Hero Banner */}
          <div className="container mx-auto px-4 mt-10 mb-9">
            <div className="relative h-40 rounded-2xl overflow-hidden shadow-md">
              <img
                src={images[currentImage]}
                alt="Banner"
                className="w-full h-full object-cover transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                <h1 className="text-4xl md:text-5xl font-bold">ALL PROPERTIES</h1>
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div className="container mx-auto px-4">
            <AllPropertyGrid limit={isMapOpen ? 6 : undefined} />
          </div>
        </div>

        {/* Map Section */}
        {isMapOpen && (
          <div className="hidden md:block w-full md:w-[40%] bg-white shadow-inner">
            <div className="w-full h-full mt-10">
              <iframe
                src="https://maps.google.com/maps?q=Ruaraka,%20Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
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

      {/* Toggle Map Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <Button
          onClick={() => setIsMapOpen(!isMapOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-11 py-8 rounded-full shadow-lg text-sm flex items-center gap-2"
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
