"use client"
import { useRouter } from "next/navigation"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface AllPropertyListingCardProps {
  id: string
  image: string // comma-separated or single image
  type?: string
  price: string
  propertyType: string
  balcony: number
  stairs: string
  rating: number
  actionType: string
}

export function AllPropertyListingCard({
  id,
  image,
  type,
  price,
  propertyType,
  balcony,
  stairs,
  rating,
  actionType,
}: AllPropertyListingCardProps) {
  const router = useRouter()
  const [liked, setLiked] = useState(false)

  // Convert image prop to array (assumes comma-separated or single)
  const images = image.includes(",") ? image.split(",") : [image]
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleCardClick = () => {
    router.push(`/properties`)
  }

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer max-w-sm"
    >
      <div className="relative h-48 w-full group overflow-hidden">
  <img
    src={images[currentIndex] || "/placeholder.svg"}
    alt={propertyType}
    className="w-full h-full object-cover transition-all duration-300"
  />

  {/* Unit badge */}
  {type && (
    <span className="absolute top-2 left-2 bg-white text-blue-600 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
      {type}
    </span>
  )}

  {/* Heart icon */}
  <button
    onClick={(e) => {
      e.stopPropagation()
      setLiked((prev) => !prev)
    }}
    className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md"
  >
    <img
      src={liked ? "/images/heart__1_.png" : "/images/heart.jpeg"}
      alt="like"
      className="w-5 h-5 object-contain"
    />
  </button>

  {/* Carousel arrows */}
  {images.length > 1 && (
    <>
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </>
  )}

  {/* Image Indicator Dots */}
  {images.length > 1 && (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
      {images.map((_, index) => (
        <span
          key={index}
          className={`h-[2px] w-6 rounded transition-colors duration-300 ${
            index === currentIndex ? "bg-white" : "bg-white/30"
          }`}
        />
      ))}
    </div>
  )}
</div>


      <div className="px-4 pt-2 pb-4">
        <p className="text-xs text-gray-500 mb-1">Umoja III, Nairobi</p>
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{propertyType}</h3>
        <p className="text-sm text-gray-700 mb-2">{price}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {balcony} Balcony • {stairs}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
