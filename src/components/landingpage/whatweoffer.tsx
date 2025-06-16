import { ServiceCard } from "./service-card"

const services = [
  {
    id: "1",
    image: "/placeholder.svg?height=400&width=600&text=Property+Management+Coins",
    title: "PROPERTY & SERVICE CHARGE MANAGEMENT",
  },
  {
    id: "2",
    image: "/placeholder.svg?height=400&width=600&text=Property+Valuation+House",
    title: "PROPERTY & ASSET VALUATION",
  },
  {
    id: "3",
    image: "/placeholder.svg?height=300&width=1200&text=Real+Estate+Consultancy+Keys",
    title: "GENERAL REAL ESTATE CONSULTANCY",
  },
]

export function WhatWeOffer() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto px-4 container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-4xl">What we offer</h2>
          <p className="text-gray-600 text-lg">Get the Best Services from us</p>
        </div>

        {/* Services Grid */}
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 mb-6">
          {/* Property Management */}
          <ServiceCard image={services[0].image} title={services[0].title} className="h-64 md:h-80" />

          {/* Property Valuation */}
          <ServiceCard image={services[1].image} title={services[1].title} className="h-64 md:h-80" />
        </div>

        {/* Full Width Consultancy */}
        <div className="w-full">
          <ServiceCard image={services[2].image} title={services[2].title} className="h-48 md:h-64" />
        </div>
      </div>
    </section>
  )
}
