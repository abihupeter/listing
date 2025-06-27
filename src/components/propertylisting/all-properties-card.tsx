"use client"
import { useRouter } from "next/navigation"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface AllPropertyListingCardProps {
  id: string
  image: string
  type?: string // "10 Units"
  price: string
  propertyType: string // title e.g. Grey Heights Apartments
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
          src={image || "/placeholder.svg"}
          alt={propertyType}
          className="w-full h-full object-cover"
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

        {/* Arrows (optional logic not implemented) */}
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="px-4 pt-2 pb-4">
        {/* Location */}
        <p className="text-xs text-gray-500 mb-1">Umoja II, Nairobi</p>

        {/* Title */}
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{propertyType}</h3>

        {/* Price */}
        <p className="text-sm text-gray-700 mb-2">{price}</p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">{balcony} Balcony • {stairs} </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
