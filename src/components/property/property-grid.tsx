"use client"

import { PropertyListingCard } from "./property-listing-card"

const properties = [
  {
    id: "A01",
    image: "/placeholder.svg?height=300&width=400&text=Studio+Apartment",
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
    image: "/placeholder.svg?height=300&width=400&text=Modern+Stall",
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
    image: "/placeholder.svg?height=300&width=400&text=Luxury+Bungalow",
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
    image: "/placeholder.svg?height=300&width=400&text=Servant+Quarters",
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
    image: "/placeholder.svg?height=300&width=400&text=Office+Space",
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
    image: "/placeholder.svg?height=300&width=400&text=Modern+Mansionette",
    type: "Residential",
    price: "Ksh 35,000/month",
    propertyType: "Mansionette",
    bedrooms: 4,
    bathrooms: 3,
    rating: 4.5,
    actionType: "Rent To Own",
  },
  {
    id: "A07",
    image: "/placeholder.svg?height=300&width=400&text=Retail+Shop",
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
    image: "/placeholder.svg?height=300&width=400&text=Cozy+Studio",
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
    image: "/placeholder.svg?height=300&width=400&text=Family+Bungalow",
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
    image: "/placeholder.svg?height=300&width=400&text=Bedsitter+Unit",
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
    image: "/placeholder.svg?height=300&width=400&text=Commercial+Stall",
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
    image: "/placeholder.svg?height=300&width=400&text=Apartment+Unit",
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
