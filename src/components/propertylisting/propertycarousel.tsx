"use client"

import { useState, useEffect } from "react"
import { PropertyCard } from "./property-card"
import { CarouselDots } from "./carousel-dots"
import Link from 'next/link';

const featuredProperties = [
  {
    id: "1",
    image: "/placeholder.svg?height=300&width=400&text=Cozy+Apartment+Aerial+View",
    apiImage: "property.property_image[0].image",
    price: "Ksh. 15,000/ month",
    propertyType: "Villa",
    title: "Cozy Apartment",
    location: "10 Riverside Road, Nairobi, Kenya",
    bedrooms: 1,
    bathrooms: 4,
    isFeatured: true,
    isForRent: true,
  },
  {
    id: "2",
    image: "/placeholder.svg?height=300&width=400&text=Garden+View+Apartments+Aerial",
    apiImage: "property.property_image[1].image",
    price: "Ksh. 15,000/ month",
    propertyType: "Apartment",
    title: "Garden View Apartments",
    location: "20 Palm Street, Mombasa, Kenya",
    bedrooms: 1,
    bathrooms: 4,
    isFeatured: true,
    isForRent: true,
  },
  {
    id: "3",
    image: "/placeholder.svg?height=300&width=400&text=Downtown+Studio+Aerial+View",
    apiImage: "property.property_image[2].image",
    price: "Ksh. 15,000/ month",
    propertyType: "Studio Apartments",
    title: "Downtown Studio",
    location: "30 Beach Road, Nakuru, Kenya",
    bedrooms: 1,
    bathrooms: 4,
    isFeatured: true,
    isForRent: true,
  },
  {
    id: "4",
    image: "/placeholder.svg?height=300&width=400&text=Luxury+Villa+Aerial+View",
    apiImage: "property.property_image[3].image",
    price: "Ksh. 25,000/ month",
    propertyType: "Villa",
    title: "Luxury Villa",
    location: "15 Hill View, Kisumu, Kenya",
    bedrooms: 3,
    bathrooms: 2,
    isFeatured: true,
    isForRent: true,
  },
  {
    id: "5",
    image: "/placeholder.svg?height=300&width=400&text=Modern+Penthouse+View",
    apiImage: "property.property_image[4].image",
    price: "Ksh. 35,000/ month",
    propertyType: "Penthouse",
    title: "Modern Penthouse",
    location: "5 City Center, Nairobi, Kenya",
    bedrooms: 2,
    bathrooms: 3,
    isFeatured: true,
    isForRent: true,
  },
  {
    id: "6",
    image: "/placeholder.svg?height=300&width=400&text=Beachfront+Condo+Aerial",
    apiImage: "property.property_image[5].image",
    price: "Ksh. 20,000/ month",
    propertyType: "Condo",
    title: "Beachfront Condo",
    location: "40 Ocean Drive, Mombasa, Kenya",
    bedrooms: 2,
    bathrooms: 2,
    isFeatured: true,
    isForRent: true,
  },
]

// const propertyImages = `https://kodinyumba.app/media/Stock/hd/Property/apartment${randomNumber}.jpg`;
//  conts unitImages =`https://kodinyumba.app/media/Stock/House/house${imageNumber}.jpg`


export function FeaturedProperties() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const itemsPerSlide = 3
  const totalSlides = Math.ceil(featuredProperties.length / itemsPerSlide)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1))
    }, 5000) // Auto-advance every 5 seconds

    return () => clearInterval(interval)
  }, [totalSlides])

  const getCurrentSlideProperties = () => {
    const startIndex = currentSlide * itemsPerSlide
    return featuredProperties.slice(startIndex, startIndex + itemsPerSlide)
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto px-4 container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-4xl">Featured Properties</h2>
          <p className="mb-6 text-gray-600 text-lg">Handpicked properties by our team.</p>
          <Link href="/properties">
            <button className="font-medium text-blue-600 hover:text-blue-700 underline">
              View all
            </button>
          </Link>
        </div>

        {/* Properties Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {getCurrentSlideProperties().map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Carousel Dots */}
        <CarouselDots total={totalSlides} current={currentSlide} onDotClick={setCurrentSlide} />
      </div>
    </section>
  )
}
