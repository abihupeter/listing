import { CityCard } from "./city-card"

const cities = [
  {
    name: "Nairobi",
    propertyCount: 102,
    image: "/placeholder.svg?height=300&width=250&text=Nairobi+Skyline",
  },
  {
    name: "Kisumu",
    propertyCount: 50,
    image: "/placeholder.svg?height=300&width=250&text=Kisumu+Lake+View",
  },
  {
    name: "Narok",
    propertyCount: 17,
    image: "/placeholder.svg?height=300&width=250&text=Narok+Landscape",
  },
  {
    name: "Nakuru",
    propertyCount: 60,
    image: "/placeholder.svg?height=300&width=250&text=Nakuru+City",
  },
  {
    name: "Kakamega",
    propertyCount: 8,
    image: "/placeholder.svg?height=300&width=250&text=Kakamega+Town",
  },
]

export function CitiesSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto px-4 container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-4xl">Find properties in these cities</h2>
          <p className="text-gray-600 text-lg">
            Unlocking Your <span className="font-semibold">Perfect Place</span>, City by City.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="flex gap-6 pb-4 overflow-x-auto scrollbar-hide">
          {cities.map((city) => (
            <CityCard key={city.name} {...city} />
          ))}
        </div>
      </div>
    </section>
  )
}
