"use client"

import { useRouter } from "next/navigation"
import { MapPin } from "lucide-react"
import { PropertyBadge } from "./property-badge"

interface PropertyCardProps {
  id: string
  image: string
  price: string
  propertyType: string
  title: string
  location: string
  bedrooms: number
  bathrooms: number
  isFeatured?: boolean
  isForRent?: boolean
}

export function PropertyCard({
  id,
  image,
  price,
  propertyType,
  title,
  location,
  bedrooms,
  bathrooms,
  isFeatured = false,
  isForRent = true,
}: PropertyCardProps) {
  const router = useRouter()

  const handleCardClick = () => {
    router.push("/property/1")
  }

  return (
    <div
      className="bg-white shadow-lg hover:shadow-xl rounded-2xl overflow-hidden transition-shadow duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Property Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image || "https://kodinyumba.app/media/Stock/hd/LandingPage/19.jpg?text=Modern+Villa+1"}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="top-4 left-4 absolute flex flex-wrap gap-2">
          {isFeatured && <PropertyBadge variant="featured">Featured</PropertyBadge>}
          <PropertyBadge variant={isForRent ? "rent" : "sale"}>{isForRent ? "For Rent" : "For Sale"}</PropertyBadge>
        </div>

        {/* Room Info */}
        <div className="top-4 right-4 absolute flex gap-2">
          <PropertyBadge variant="info">{bedrooms} Br</PropertyBadge>
          <PropertyBadge variant="info">{bathrooms} Br</PropertyBadge>
        </div>

        {/* Price Overlay */}
        <div className="bottom-4 left-4 absolute">
          <div className="drop-shadow-lg font-bold text-white text-2xl">{price}</div>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6">
        <div className="mb-2">
          <span className="font-medium text-blue-600 text-sm">{propertyType}</span>
        </div>

        <h3 className="mb-3 font-bold text-gray-900 text-xl">{title}</h3>

        <div className="flex items-center text-gray-600">
          <MapPin className="mr-2 w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>
      </div>
    </div>
  )
}
