/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetPropertyNearbyFacilitiesQuery } from "@/app/lib/apiSlice/property/near-by-facilitiesSlice"; // Import the hook

interface NearbyFacilitiesProps {
  apartmentId: string | undefined; // Add apartmentId prop
}

export function NearbyFacilities({ apartmentId }: NearbyFacilitiesProps) {
  // Fetch nearby facilities using the hook
  const { data, isLoading, error } = useGetPropertyNearbyFacilitiesQuery(
    apartmentId!,
    {
      skip: !apartmentId, // Skip the query if apartmentId is not provided
    }
  );

  // Access the facilities list from the API response
  const facilities = data?.data || []; //  data contains a 'data' field with the facilities array

  return (
    <div className="relative py-6 border-gray-300 border-t">
      <h3 className="mb-4 font-bold text-xl">Nearby Facilities</h3>
      {isLoading && <p>Loading facilities...</p>}
      {error && <p className="text-red-500">Error loading facilities.</p>}
      {!isLoading && !error && facilities.length === 0 && (
        <p className="text-gray-500">
          No nearby facilities found for this apartment.
        </p>
      )}
      {!isLoading && !error && facilities.length > 0 && (
        <div className="gap-4 grid grid-cols-2 md:grid-cols-3">
          {facilities.map(
            (
              facility: any,
              index: number 
            ) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 border rounded-lg"
              >
                <img
                  src={facility.image} //  API returns 'image' property
                  alt={facility.name} // API returns 'name' property
                  className="rounded-lg w-13 h-13 object-contain"
                />
                <div>
                  <h4 className="font-medium">{facility.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {facility.distance} away
                  </p>{" "}
                  {/* API returns 'distance' property */}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
