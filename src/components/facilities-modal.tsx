/* eslint-disable @next/next/no-img-element */
"use client";

import { X } from "lucide-react";
import { useGetPropertyNearbyFacilitiesQuery } from "@/app/lib/apiSlice/property/near-by-facilitiesSlice"; // Import the hook

interface FacilitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  apartmentId: string | undefined; // Add apartmentId prop
}

export function FacilitiesModal({
  isOpen,
  onClose,
  apartmentId,
}: FacilitiesModalProps) {
  // Fetch nearby facilities using the hook
  const { data, isLoading, error } = useGetPropertyNearbyFacilitiesQuery(
    apartmentId!,
    {
      skip: !apartmentId, // Skip the query if apartmentId is not provided
    }
  );

  if (!isOpen) return null;

  // Access the facilities list from the API response
  const facilities = data?.data || []; // Assuming data contains a 'data' field with the facilities array

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/80">
      <div className="relative bg-white shadow-xl p-6 rounded-lg w-full max-w-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="top-4 right-4 absolute text-gray-500 hover:text-gray-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <h2 className="mb-6 font-semibold text-xl text-center">
          All Nearby Facilities
        </h2>

        {/* Loading, Error, or Amenity Grid */}
        {isLoading && <p className="text-center">Loading facilities...</p>}
        {error && (
          <p className="text-center text-red-500">Error loading facilities.</p>
        )}
        {!isLoading && !error && facilities.length === 0 && (
          <p className="text-center text-gray-500">
            No nearby facilities found for this apartment.
          </p>
        )}
        {!isLoading && !error && facilities.length > 0 && (
          <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 border-y py-4">
            {facilities.map(
              (
                item: any,
                idx: number // Adjust 'any' to specific Facility type if available
              ) => (
                <div
                  key={idx}
                  className="flex flex-col items-center space-y-2 text-center"
                >
                  <img
                    src={item.image} // Assuming API returns 'image' property
                    alt={item.name} // Assuming API returns 'name' property
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-gray-800 text-sm">{item.name}</span>
                  {item.distance && (
                    <span className="text-gray-600 text-xs">
                      {item.distance} away
                    </span>
                  )}{" "}
                  {/* Optional: Display distance if available */}
                </div>
              )
            )}
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-right">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
