"use client"

import { useRouter } from "next/navigation"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface PropertyListingCardProps {
  id: string
  images: string[]
  type?: string
  price: string
  propertyType: string
  bedrooms: number
  bathrooms: number
  rating: number
  actionType: string
}

export function PropertyListingCard({
  id,
  images,
  type,
  price,
  propertyType,
  bedrooms,
  bathrooms,
  rating,
  actionType,
}: PropertyListingCardProps) {
  const router = useRouter()
  const [liked, setLiked] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleCardClick = () => {
    router.push(`/unit/${id}`)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    )
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
      {/* Property Image Carousel */}
      <div className="group relative h-48 overflow-hidden">
  <img
    src={images[currentImageIndex] || "/placeholder.svg"}
    alt={propertyType}
    className="w-full h-full object-cover transition-all duration-500"
  />

  {/* Left Arrow */}
  <button
    onClick={handlePrev}
    className="top-1/2 left-2 absolute bg-white/80 opacity-0 group-hover:opacity-100 p-1 rounded-full transition-opacity -translate-y-1/2 transform"
  >
    <ChevronLeft className="w-4 h-4" />
  </button>

  {/* Right Arrow */}
  <button
    onClick={handleNext}
    className="top-1/2 right-2 absolute bg-white/80 opacity-0 group-hover:opacity-100 p-1 rounded-full transition-opacity -translate-y-1/2 transform"
  >
    <ChevronRight className="w-4 h-4" />
  </button>

  {/* Property Type Badge */}
  {type && (
    <div className="top-4 left-4 absolute">
      <span className="bg-white/90 px-3 py-1 rounded-full font-medium text-gray-800 text-sm">
        {type}
      </span>
    </div>
  )}

  {/* Action Type Badge */}
  <div className="bottom-4 left-4 absolute">
    <span
      className={`${getActionTypeColor(
        actionType
      )} text-white px-3 py-1 rounded-full text-sm font-medium`}
    >
      {actionType}
    </span>
  </div>

  {/* Like Button */}
  <button
    onClick={(e) => {
      e.stopPropagation()
      setLiked((prev) => !prev)
    }}
    className="top-4 right-4 absolute bg-white/80 p-2 rounded-full"
  >
    <img
      src={liked ? "/images/heart__1_.png" : "/images/heart.jpeg"}
      alt="Favorite"
      className="w-5 h-5 object-contain"
    />
  </button>

  {/* Image Indicator Dots */}
  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
    {images.map((_, index) => (
      <span
        key={index}
        className={`h-[2px] w-6 rounded transition-colors duration-300 ${
          index === currentImageIndex ? "bg-white" : "bg-white/30"
        }`}
      />
    ))}
  </div>
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
