"use client"

import { useState, useEffect } from "react"
import { PropertyCard } from "./property-card"
import { CarouselDots } from "./carousel-dots"
import Link from 'next/link'


export function FeaturedProperties() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const itemsPerSlide = 3
  const totalSlides = Math.ceil(6 / itemsPerSlide)
// removes hard codes images 
  //generate properties with image URLs
  const featuredProperties = Array.from({ length: 6 }, (_, index) => {
    const imageUrl = `https://kodinyumba.app/media/Stock/hd/Property/apartment${index + 1}.jpg`

    return {
      id: `${index + 1}`,
      image: imageUrl,
      price: "Ksh. 15,000/ month",
      propertyType: ["Villa", "Apartment", "Studio", "Penthouse", "Condo", "Bungalow"][index % 6],
      title: ["Cozy Apartment", "Garden View", "Downtown Studio", "Luxury Villa", "Modern Penthouse", "Beach Condo"][index % 6],
      location: ["Nairobi", "Mombasa", "Nakuru", "Kisumu", "Eldoret", "Naivasha"][index % 6],
      bedrooms: 1 + (index % 3),
      bathrooms: 2 + (index % 2),
      isFeatured: true,
      isForRent: true,
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1))
    }, 5000)

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
          <Link href="/property">
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
