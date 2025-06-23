
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PropertyTypeFilter } from "@/components/property/property-type-filter"
import { PropertyGrid } from "@/components/property/property-grid"
import { FiltersModal } from "@/components/property/filters-modal"
import { MapPin, Grid3X3 } from "lucide-react"

export default function PropertiesPage() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("amenities")

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
          src="https://kodinyumba.app/media/Stock/hd/Property/apartment${6}.jpg"
          alt="Ruaraka Johari Apartments"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <p className="mb-2 text-white text-lg">RUARAKA</p>
          <h1 className="mb-6 font-bold text-white text-4xl md:text-5xl">JOHARI APARTMENTS</h1>
          <div className="flex gap-4">
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              <MapPin className="w-4 h-4" />
              Show Map
            </Button>
            <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
              <Grid3X3 className="mr-2 w-4 h-4" />
              Show all photos
            </Button>
          </div>
        </div>
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
    </div>
  )
}
