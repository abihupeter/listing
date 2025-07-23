// Path: abihupeter/listing/listing-a1787b3bfbcf882f91abb29c3114b401b3f9ad1d/src/components/citiessection/cities-section.tsx

import { CityCard } from "./city-card";
import { useGetGroupedPropertiesByLocationQuery } from "../../app/lib/apiSlice/property/grouped-properties-by-locationSlice";

// Define the interface for the data structure expected by CityCard
interface CityDisplayData {
  name: string;
  propertyCount: number;
  image: string;
}

// Define a static mapping for city images.
const cityImageMap: { [key: string]: string } = {
  Nairobi: "/images/miami.jpg",
  Kisumu: "/images/LA.jpg",
  Narok: "/images/NY.jpeg",
  Nakuru: "/images/Florida.jpg",
  Kakamega: "/images/kakamega.jpg",
  Bungoma: "/images/bungoma.jpg",
 
};

export function CitiesSection() {
  const {
    data: apiCities,
    isLoading,
    isError,
  } = useGetGroupedPropertiesByLocationQuery(undefined);

  if (isLoading) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto px-11 container text-center">
          <p className="text-gray-600 text-lg">Loading cities...</p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto px-11 container text-center">
          <p className="text-red-500 text-lg">
            Error loading cities. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  // Transform the API data to match CityCard props, explicitly typing cityData
  const citiesToDisplay: CityDisplayData[] = (apiCities || []).map(
    (cityData: { county_name: string; property_count: number }) => ({
      name: cityData.county_name,
      propertyCount: cityData.property_count,
      image: cityImageMap[cityData.county_name] || "/placeholder.svg",
    })
  );

  if (citiesToDisplay.length === 0) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto px-11 container text-center">
          <p className="text-gray-600 text-lg">
            No cities with properties found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto px-11 container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-3xl md:text-4xl">
            Find properties in these cities
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Unlocking Your <span className="font-semibold">Perfect Place</span>,
            City by City.
          </p>
        </div>

        {/* Scrollable Cities Row */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-2 pb-4 snap-x snap-mandatory">
          {/* Map over the transformed cities data, explicitly typing 'city' */}
          {citiesToDisplay.map(
            (
              city: CityDisplayData // FIX: Explicitly type 'city' here
            ) => (
              <div
                key={city.name}
                className="w-[260px] md:w-[220px] lg:w-[240px] shrink-0 snap-start"
              >
                <CityCard {...city} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
