"use client"

import { PropertyListingCard } from "./property-listing-card"

const properties = [
  {
    id: "A01",
    image: "https://kodinyumba.app/media/Stock/House/house${1}.jpg",
    type: "Residential",
    price: "Ksh 15,500/month",
    propertyType: "Studio",
    bedrooms: 2,
    bathrooms: 3,
    rating: 0.5,
    actionType: "Rent To Own",
  },
  {
    id: "A02",
    image: "https://kodinyumba.app/media/Stock/House/house${2}.jpg",
    type: "Commercial",
    price: "Ksh 16,000/month",
    propertyType: "Stall",
    bedrooms: 4,
    bathrooms: 1,
    rating: 1.5,
    actionType: "Purchase",
  },
  {
    id: "A03",
    image: "https://kodinyumba.app/media/Stock/House/house${3}.jpg",
    type: "Residential",
    price: "Ksh 16,500/month",
    propertyType: "Bungalow",
    bedrooms: 1,
    bathrooms: 3,
    rating: 3.5,
    actionType: "Rent",
  },
  {
    id: "A04",
    image: "https://kodinyumba.app/media/Stock/House/house${4}.jpg",
    type: "Residential",
    price: "Ksh 17,000/month",
    propertyType: "Servant Quarters(Sq)",
    bedrooms: 3,
    bathrooms: 1,
    rating: 0.5,
    actionType: "Purchase",
  },
  {
    id: "A05",
    image: "https://kodinyumba.app/media/Stock/House/house${5}.jpg",
    type: "Commercial",
    price: "Ksh 25,000/month",
    propertyType: "Office",
    bedrooms: 2,
    bathrooms: 2,
    rating: 4.0,
    actionType: "Rent",
  },
  {
    id: "A06",
    image: "https://kodinyumba.app/media/Stock/House/house${6}.jpg",
    price: "Ksh 35,000/month",
    propertyType: "Mansionette",
    bedrooms: 4,
    bathrooms: 3,
    rating: 4.5,
    actionType: "Rent To Own",
  },
  {
    id: "A07",
    image: "https://kodinyumba.app/media/Stock/House/house${7}.jpg",
    type: "Commercial",
    price: "Ksh 18,000/month",
    propertyType: "Shop",
    bedrooms: 1,
    bathrooms: 1,
    rating: 2.5,
    actionType: "Purchase",
  },
  {
    id: "A08",
    image: "https://kodinyumba.app/media/Stock/House/house${8}.jpg",
    type: "Residential",
    price: "Ksh 12,000/month",
    propertyType: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    rating: 3.0,
    actionType: "Rent",
  },
  {
    id: "A09",
    image: "https://kodinyumba.app/media/Stock/House/house${9}.jpg",
    type: "Residential",
    price: "Ksh 28,000/month",
    propertyType: "Bungalow",
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.2,
    actionType: "Rent To Own",
  },
  {
    id: "A10",
    image: "https://kodinyumba.app/media/Stock/House/house${10}.jpg",
    type: "Residential",
    price: "Ksh 8,500/month",
    propertyType: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    rating: 2.0,
    actionType: "Rent",
  },
  {
    id: "A11",
    image: "https://kodinyumba.app/media/Stock/House/house${11}.jpg",
    type: "Commercial",
    price: "Ksh 22,000/month",
    propertyType: "Stall",
    bedrooms: 2,
    bathrooms: 1,
    rating: 3.8,
    actionType: "Purchase",
  },
  {
    id: "A12",
    image: "https://kodinyumba.app/media/Stock/House/house${12}.jpg",
    type: "Residential",
    price: "Ksh 19,500/month",
    propertyType: "Apartment Units",
    bedrooms: 2,
    bathrooms: 2,
    rating: 3.5,
    actionType: "Rent",
  },
]

export function PropertyGrid() {
  return (
    <div className="mx-auto px-4 pb-12 container">
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map((property) => (
          <PropertyListingCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  )
}
