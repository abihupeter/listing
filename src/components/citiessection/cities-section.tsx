import { CityCard } from "./city-card"

const cities = [
  {
    name: "Nairobi",
    propertyCount: 102,
    image: "/images/miami.jpg",
  },
  {
    name: "Kisumu",
    propertyCount: 50,
    image:"/images/LA.jpg",
  },
  {
    name: "Narok",
    propertyCount: 17,
    image:"/images/NY.jpeg",
  },
  {
    name: "Nakuru",
    propertyCount: 60,
    image: "/images/Florida.jpg",
  },
  {
    name: "Kakamega",
    propertyCount: 8,
    image: "/images/kakamega.jpg",
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
        <div className="flex justify-center gap-6 pb-4 overflow-x-auto scrollbar-hide">
          {cities.map((city) => (
            <CityCard key={city.name} {...city} />
          ))}
        </div>

      </div>
    </section>
  )
}
