"use client"

import { FavoritesCard } from "./favorites-card"

const favoriteProperties = [
  {
    id: "A01",
    image: ["https://kodinyumba.app/media/Stock/House/house10.jpg", "https://kodinyumba.app/media/Stock/House/house16.jpg", "https://kodinyumba.app/media/Stock/House/house20.jpg"],
    price: "Ksh 15,500/month",
    propertyType: "Studio",
    bedrooms: 2,
    bathrooms: 1,
    rating: 4.3,
    actionType: "Rent To Own",
  },
  {
    id: "A02",
    image: ["https://kodinyumba.app/media/Stock/House/house2.jpg", "https://kodinyumba.app/media/Stock/House/house18.jpg", "https://kodinyumba.app/media/Stock/House/house17.jpg"],
    price: "Ksh 18,000/month",
    propertyType: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.0,
    actionType: "Purchase",
  },
  {
    id: "A03",

    image: ["https://kodinyumba.app/media/Stock/House/house3.jpg", "https://kodinyumba.app/media/Stock/House/house11.jpg", "https://kodinyumba.app/media/Stock/House/house10.jpg"],
    price: "Ksh 10,000/month",
    propertyType: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    rating: 3.6,
    actionType: "Rent",
  },
  {
    id: "A04",
    image: ["https://kodinyumba.app/media/Stock/House/house4.jpg", "https://kodinyumba.app/media/Stock/House/house9.jpg", "https://kodinyumba.app/media/Stock/House/house8.jpg"],
    price: "Ksh 22,000/month",
    propertyType: "Bungalow",
    bedrooms: 4,
    bathrooms: 3,
    rating: 4.8,
    actionType: "Rent",
  },
 
]

export function FavoritesGrid() {
  const properties2025 = favoriteProperties.slice(0, 3)
  const properties2024 = favoriteProperties.slice(3)

  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      {/* 2025 Section */}
      <div className="space-y-4">
        <button className="bg-gray-200 text-gray-400 px-4 py-1 rounded-md text-sm font-semibold">
          2025
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {properties2025.map((property) => (
            <FavoritesCard key={property.id} {...property} />
          ))}
        </div>
      </div>

      {/* 2024 Section */}
      <div className="space-y-4">
        <button className="bg-gray-200 text-gray-400 px-4 py-1 rounded-md text-sm font-semibold">
          2024
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {properties2024.map((property) => (
            <FavoritesCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </div>
  )
}
