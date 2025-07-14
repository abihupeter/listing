/* eslint-disable @next/next/no-img-element */
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
  image,
  type,
  price,
  propertyType,
  balcony,
  stairs,
  rating,
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
      className="bg-white shadow-sm hover:shadow-md border rounded-xl max-w-sm overflow-hidden transition-all duration-300 cursor-pointer"
    >
      <div className="group relative w-full h-48 overflow-hidden">
  <img
    src={images[currentIndex] || "/placeholder.svg"}
    alt={propertyType}
    className="w-full h-full object-cover transition-all duration-300"
  />

  {/* Unit badge */}
  {type && (
    <span className="top-2 left-2 absolute bg-white shadow-sm px-2 py-1 rounded-full font-semibold text-blue-600 text-xs">
      {type}
    </span>
  )}

  {/* Heart icon */}
  <button
    onClick={(e) => {
      e.stopPropagation()
      setLiked((prev) => !prev)
    }}
    className="top-2 right-2 absolute bg-white shadow-md p-1.5 rounded-full"
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
        className="top-1/2 left-2 absolute bg-white/80 opacity-0 group-hover:opacity-100 p-1 rounded-full transition -translate-y-1/2 transform"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={handleNext}
        className="top-1/2 right-2 absolute bg-white/80 opacity-0 group-hover:opacity-100 p-1 rounded-full transition -translate-y-1/2 transform"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </>
  )}

  {/* Image Indicator Dots */}
  {images.length > 1 && (
    <div className="bottom-2 left-1/2 absolute flex gap-1 -translate-x-1/2">
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
        <p className="mb-1 text-gray-500 text-xs">Umoja III, Nairobi</p>
        <h3 className="mb-1 font-semibold text-gray-900 text-lg">{propertyType}</h3>
        <p className="mb-2 text-gray-700 text-sm">{price}</p>
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-sm">
            {balcony} Balcony • {stairs}
          </div>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <Star className="fill-yellow-400 w-4 h-4 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
