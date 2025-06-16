"use client"

import { useRouter } from "next/navigation"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

interface PropertyListingCardProps {
  id: string
  image: string
  type: string
  price: string
  propertyType: string
  bedrooms: number
  bathrooms: number
  rating: number
  actionType: string
}

export function PropertyListingCard({
  id,
  image,
  type,
  price,
  propertyType,
  bedrooms,
  bathrooms,
  rating,
  actionType,
}: PropertyListingCardProps) {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/unit/${id}`)
  }

  const getActionTypeColor = (action: string) => {
    switch (action) {
      case "Rent":
        return "bg-green-600"
      case "Purchase":
        return "bg-blue-600"
      case "Rent To Own":
        return "bg-purple-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <div
      className="bg-white shadow-lg hover:shadow-xl rounded-2xl overflow-hidden transition-shadow duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Property Image */}
      <div className="group relative h-48 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={propertyType} className="w-full h-full object-cover" />

        {/* Navigation arrows */}
        <button className="top-1/2 left-2 absolute bg-white/80 opacity-0 group-hover:opacity-100 p-1 rounded-full transition-opacity -translate-y-1/2 transform">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="top-1/2 right-2 absolute bg-white/80 opacity-0 group-hover:opacity-100 p-1 rounded-full transition-opacity -translate-y-1/2 transform">
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Property Type Badge */}
        <div className="top-4 left-4 absolute">
          <span className="bg-white/90 px-3 py-1 rounded-full font-medium text-gray-800 text-sm">{type}</span>
        </div>

        {/* Action Type Badge */}
        <div className="bottom-4 left-4 absolute">
          <span className={`${getActionTypeColor(actionType)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
            {actionType}
          </span>
        </div>

        {/* Favorite Button */}
        <button className="top-4 right-4 absolute bg-white/80 p-2 rounded-full">
          <div className="border border-gray-400 rounded-full w-4 h-4" />
        </button>
      </div>

      {/* Property Details */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-gray-900 text-lg">{id}</span>
          <div className="flex items-center gap-1">
            <Star className="fill-yellow-400 w-4 h-4 text-yellow-400" />
            <span className="text-gray-600 text-sm">{rating}</span>
          </div>
        </div>

        <div className="mb-1 font-bold text-gray-900 text-xl">{price}</div>
        <div className="mb-3 text-gray-600">{propertyType}</div>

        <div className="flex items-center gap-4 text-gray-600 text-sm">
          <span>{bedrooms} Bedrooms</span>
          <span>•</span>
          <span>
            {bathrooms} Bathroom{bathrooms > 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  )
}
