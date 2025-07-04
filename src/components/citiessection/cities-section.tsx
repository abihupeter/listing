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
  {
    name: "Bungoma",
    propertyCount: 20,
    image: "/images/bungoma.jpg",
  },
]

export function CitiesSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto px-11 container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-3xl md:text-4xl">
            Find properties in these cities
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Unlocking Your <span className="font-semibold">Perfect Place</span>, City by City.
          </p>
        </div>

        {/* Scrollable Cities Row */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-2 pb-4 snap-x snap-mandatory">
          {cities.map((city) => (
            <div
              key={city.name}
              className="w-[260px] md:w-[220px] lg:w-[240px] shrink-0 snap-start"
            >
              <CityCard {...city} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
