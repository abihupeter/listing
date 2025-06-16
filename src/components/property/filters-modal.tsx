/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface FiltersModalProps {
  isOpen: boolean
  onClose: () => void
}

const propertyTypes = [
  { id: "apartment", name: "Apartment Units", icon: "🏢" },
  { id: "studio", name: "Studio", icon: "🏠" },
  { id: "bungalow", name: "Bungalow", icon: "🏡" },
  { id: "bedsitter", name: "Bedsitter", icon: "🏠" },
  { id: "sq", name: "Servant Quarters(SQ)", icon: "🏠" },
  { id: "mansionette", name: "Mansionette", icon: "🏘️" },
  { id: "office", name: "Office", icon: "🏢" },
  { id: "stall", name: "Stall", icon: "🏪" },
  { id: "shop", name: "Shop", icon: "🛒" },
]

const amenities = [
  { id: "parking", name: "Parking", icon: "🚗" },
  { id: "wifi", name: "Wifi", icon: "📶" },
  { id: "laundry", name: "Laundry Services", icon: "👕" },
  { id: "clothingline", name: "Clothing Line", icon: "👔" },
  { id: "pool", name: "Swimming Pool", icon: "🏊" },
  { id: "ac", name: "Air Conditioning", icon: "❄️" },
  { id: "security", name: "24 Hour Security", icon: "🔒" },
]

export function FiltersModal({ isOpen, onClose }: FiltersModalProps) {
  const [selectedPlaceType, setSelectedPlaceType] = useState("rent")
  const [priceRange, setPriceRange] = useState([5000, 500000])
  const [bedrooms, setBedrooms] = useState("any")
  const [bathrooms, setBathrooms] = useState("any")
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([])

  if (!isOpen) return null

  const handleAmenityChange = (amenityId: string, checked: boolean) => {
    if (checked) {
      setSelectedAmenities([...selectedAmenities, amenityId])
    } else {
      setSelectedAmenities(selectedAmenities.filter((id) => id !== amenityId))
    }
  }

  const handlePropertyTypeChange = (typeId: string, checked: boolean) => {
    if (checked) {
      setSelectedPropertyTypes([...selectedPropertyTypes, typeId])
    } else {
      setSelectedPropertyTypes(selectedPropertyTypes.filter((id) => id !== typeId))
    }
  }

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="font-bold text-2xl">Filters</h2>
          <button onClick={onClose} className="hover:bg-gray-100 p-2 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-8 p-6">
          {/* Type of place */}
          <div>
            <h3 className="mb-2 font-bold text-xl">Type of place</h3>
            <p className="mb-4 text-gray-600">
              Select the type of unit you're interested in based on these parameters.
            </p>
            <div className="gap-2 grid grid-cols-3">
              {["Rent", "Rent To Own", "Purchase"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedPlaceType(type.toLowerCase().replace(" ", ""))}
                  className={`p-3 border rounded-lg text-center transition-colors ${
                    selectedPlaceType === type.toLowerCase().replace(" ", "")
                      ? "border-blue-600 bg-blue-50 text-blue-600"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="mb-4 font-bold text-xl">Property Types</h3>
            <div className="gap-4 grid grid-cols-2">
              {propertyTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                  <Checkbox
                    id={type.id}
                    checked={selectedPropertyTypes.includes(type.id)}
                    onCheckedChange={(checked) => handlePropertyTypeChange(type.id, checked as boolean)}
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{type.icon}</span>
                    <label htmlFor={type.id} className="font-medium text-sm cursor-pointer">
                      {type.name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price range */}
          <div>
            <h3 className="mb-4 font-bold text-xl">Price range</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span>Ksh</span>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                  className="px-3 py-2 border rounded w-24"
                />
              </div>
              <span>-</span>
              <div className="flex items-center gap-2">
                <span>Ksh</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                  className="px-3 py-2 border rounded w-24"
                />
              </div>
              <Button variant="outline" size="sm">
                Reset
              </Button>
            </div>
          </div>

          {/* Bathrooms and Bedrooms */}
          <div>
            <h3 className="mb-4 font-bold text-xl">Bathrooms and Bedrooms</h3>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-medium">Bedrooms</h4>
                <div className="flex flex-wrap gap-2">
                  {["Any", "1", "2", "3", "4", "5", "6", "7", "8+"].map((num) => (
                    <button
                      key={num}
                      onClick={() => setBedrooms(num.toLowerCase())}
                      className={`px-4 py-2 border rounded-full transition-colors ${
                        bedrooms === num.toLowerCase()
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-2 font-medium">Bathrooms</h4>
                <div className="flex flex-wrap gap-2">
                  {["Any", "1", "2", "3", "4", "5", "6", "7", "8+"].map((num) => (
                    <button
                      key={num}
                      onClick={() => setBathrooms(num.toLowerCase())}
                      className={`px-4 py-2 border rounded-full transition-colors ${
                        bathrooms === num.toLowerCase()
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="mb-4 font-bold text-xl">Amenities</h3>
            <h4 className="mb-3 font-medium">Essentials</h4>
            <div className="gap-4 grid grid-cols-2">
              {amenities.map((amenity) => (
                <div key={amenity.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={amenity.id}
                    checked={selectedAmenities.includes(amenity.id)}
                    onCheckedChange={(checked) => handleAmenityChange(amenity.id, checked as boolean)}
                  />
                  <div className="flex items-center gap-2">
                    <span>{amenity.icon}</span>
                    <label htmlFor={amenity.id} className="font-medium text-sm cursor-pointer">
                      {amenity.name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-6 border-t">
          <Button variant="outline" onClick={() => {}}>
            Clear all
          </Button>
          <Button onClick={onClose} className="bg-blue-600 hover:bg-blue-700">
            Show 26 Units
          </Button>
        </div>
      </div>
    </div>
  )
}
