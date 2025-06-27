"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PropertyTypeFilter } from "@/components/property/property-type-filter";
import { AllPropertyGrid } from "@/components/propertylisting/all-properties-grid";
import { FiltersModal } from "@/components/property/filters-modal";
import { MapPin, Grid3X3, X } from "lucide-react";
import { Footer } from "@/components/footer";

const images = [
  "https://kodinyumba.app/media/Stock/hd/Property/apartment1.jpg",
  "https://kodinyumba.app/media/Stock/hd/Property/apartment2.jpg",
  "https://kodinyumba.app/media/Stock/hd/Property/apartment3.jpg",
  "https://kodinyumba.app/media/Stock/hd/Property/apartment4.jpg",
  "https://kodinyumba.app/media/Stock/hd/Property/apartment5.jpg",
  "https://kodinyumba.app/media/Stock/hd/Property/apartment6.jpg",
];

function MapModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white w-full max-w-3xl rounded-xl p-4 relative shadow-lg">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">
          <X />
        </button>
        <h2 className="text-xl font-semibold mb-4">Property Location</h2>
        <div className="w-full h-[500px] rounded overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Ruaraka,%20Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="rounded"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default function PropertyPage() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

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
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-blue-600 text-3xl">Kodi</div>
          <Button
            variant="outline"
            onClick={() => setIsFiltersOpen(true)}
            className="flex items-center gap-2 border rounded-md shadow-sm"
          >
            <Grid3X3 className="w-4 h-4" />
            Filters
          </Button>
        </div>
      </header>

      {/* Property Types */}
      <div className="container mx-auto px-4">
        <PropertyTypeFilter />
      </div>

      {/* Hero Banner */}
      <div className="container mx-auto px-4 mb-10">
        <div className="relative h-80 rounded-2xl overflow-hidden shadow-md">
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

      {/* Property Grid Section */}
      <div className="container mx-auto px-4">
        <AllPropertyGrid/>
      </div>

      {/* Floating Show Map Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <Button
          onClick={() => setIsMapOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-11 py-8 rounded-full shadow-lg text-sm flex items-center gap-2"
        >
          <img src="/images/map.png" alt="Map Icon" className="w-8 h-8" />
          Show Map
        </Button>
      </div>

      {/* Modals */}
      <FiltersModal isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />

      <Footer />
    </div>
  );
}
