"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { PropertyTypeFilter } from "@/components/property/property-type-filter"
import { PropertyGrid } from "@/components/property/property-grid"
import { FiltersModal } from "@/components/property/filters-modal"
import { MapPin, Grid3X3, X } from "lucide-react"
import { Footer } from "@/components/footer"
// import { AmenitiesModal } from "@/components/amenities-modal"

const images = [
  'https://kodinyumba.app/media/Stock/hd/Property/apartment1.jpg',
  'https://kodinyumba.app/media/Stock/hd/Property/apartment2.jpg',
  'https://kodinyumba.app/media/Stock/hd/Property/apartment3.jpg',
  'https://kodinyumba.app/media/Stock/hd/Property/apartment4.jpg',
  'https://kodinyumba.app/media/Stock/hd/Property/apartment5.jpg',
]

function MapModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl rounded-lg p-4 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">
          <X />
        </button>
        <h2 className="text-xl font-semibold mb-4">Property Location</h2>
        <div className="w-full h-96">
          <iframe
            src="https://maps.google.com/maps?q=Ruaraka,%20Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            className="rounded"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default function PropertiesPage() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("amenities")
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false)
  const [isMapOpen, setIsMapOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto px-4 py-4 container">
          <div className="flex justify-between items-center">
            <div className="font-bold text-blue-600 text-2xl">Kodi</div>
            <Button variant="outline" onClick={() => setIsFiltersOpen(true)} className="flex items-center gap-2">
              <Grid3X3 className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </div>
      </header>

      {/* Property Type Filter */}
      <PropertyTypeFilter />

      {/* Hero Section */}
      <div className="relative mb-8 h-64">
        <img
          src={images[currentImage]}
          alt="Ruaraka Johari Apartments"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Text and Buttons */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <p className="mb-2 text-white text-lg">RUARAKA</p>
          <h1 className="mb-6 font-bold text-white text-4xl md:text-5xl">JOHARI APARTMENTS</h1>
          <div className="flex flex-col items-center gap-2">
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700" onClick={() => setIsMapOpen(true)}>
              <MapPin className="w-4 h-4" />
              Show Map
            </Button>
            <span className="text-white text-sm">
              Photo {currentImage + 1} of {images.length}
            </span>
          </div>
        </div>

        {/* Show all photos - bottom right */}
        <div className="absolute bottom-4 right-4">
          <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
            <Grid3X3 className="mr-2 w-4 h-4" />
            Show all photos
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mx-auto mb-8 px-4 container">
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={() => setIsAmenitiesOpen(true)}
            className={activeTab === "amenities" ? "bg-blue-600 text-white" : ""}
          >
            Amenities
          </Button>
          <Button
            variant={activeTab === "facilities" ? "default" : "outline"}
            onClick={() => setActiveTab("facilities")}
            className={activeTab === "facilities" ? "bg-blue-600 text-white" : ""}
          >
            Nearby Facilities
          </Button>
        </div>
      </div>

      {/* Property Grid */}
      <PropertyGrid />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <FiltersModal isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
      <AmenitiesModal isOpen={isAmenitiesOpen} onClose={() => setIsAmenitiesOpen(false)} />
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </div>
  )
}
const amenitiesList = [
  {
    name: "Parking",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/signage.png",
  },
  {
    name: "Court",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/basketball-court.png",
  },
  {
    name: "Laundry Services",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/washing.png",
  },
  {
    name: "CCTV",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/cctv.png",
  },
  {
    name: "WiFi",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/wifi_1.png",
  },
  {
    name: "Balcony",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/balcony.png",
  },
  {
    name: "Gym",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/gym.png",
  },
  {
    name: "Clothing Line",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/drying.png",
  },
  {
    name: "Swimming Pool",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/swimming-pool.png",
  },
  {
    name: "Air Conditioning",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/air-conditioner.png",
  },
  {
    name: "24 Hour Security",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/guard.png",
  },
]

export function AmenitiesModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl rounded-lg p-6 relative shadow-xl">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold mb-4 text-center">All Amenities</h2>

        {/* Amenity Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {amenitiesList.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 text-center"
            >
              <img src={item.icon} alt={item.name} className="w-12 h-12" />
              <span className="text-sm text-gray-700">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Footer Close Button */}
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
