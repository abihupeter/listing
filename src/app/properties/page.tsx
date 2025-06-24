"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { PropertyTypeFilter } from "@/components/property/property-type-filter"
import { PropertyGrid } from "@/components/property/property-grid"
import { FiltersModal } from "@/components/property/filters-modal"
import { MapPin, Grid3X3, ChevronLeft, ChevronRight } from "lucide-react"
import { Footer } from "@/components/footer"

export default function PropertiesPage() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("amenities")
  const [currentIndex, setCurrentIndex] = useState(0)

  // List of image indexes (e.g., apartment1 to apartment10)
  const images = Array.from({ length: 10 }, (_, i) => `https://kodinyumba.app/media/Stock/hd/Property/apartment${i + 1}.jpg`)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const imageUrl = images[currentIndex]

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
      <div className="relative mb-8 h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt="Ruaraka Johari Apartments"
          className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <p className="mb-2 text-white text-lg">RUARAKA</p>
          <h1 className="mb-6 font-bold text-white text-4xl md:text-5xl">JOHARI APARTMENTS</h1>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            Show Map
            <img src="/images/map.png" alt="Map Icon" className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20 border-white text-white"
            >
              <Grid3X3 className="mr-2 w-4 h-4" />
              Show all photos
            </Button>
          </div>
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

      {/* Tabs */}
      <div className="mx-auto mb-8 px-4 container">
        <div className="flex gap-4">
          <Button
            variant={activeTab === "amenities" ? "default" : "outline"}
            onClick={() => setActiveTab("amenities")}
            className={activeTab === "amenities" ? "bg-blue-600" : ""}
          >
            Amenities
          </Button>
          <Button
            variant={activeTab === "facilities" ? "default" : "outline"}
            onClick={() => setActiveTab("facilities")}
            className={activeTab === "facilities" ? "bg-blue-600" : ""}
          >
            Nearby Facilities
          </Button>
        </div>
      </div>

      {/* Property Grid */}
      <PropertyGrid />

      {/* Filters Modal */}
      <FiltersModal isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
      <Footer />
    </div>
  )
}
