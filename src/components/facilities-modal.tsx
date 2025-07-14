/* eslint-disable @next/next/no-img-element */
"use client";

import { X } from "lucide-react";

const facilitiesList = [
  {
    name: "Church",
    distance: "120m",
    image: "https://kodinyumba.app/media/church.png"
},
{
    name: "Hospital",
    distance: "500m",
    image: "https://kodinyumba.app/media/hospital.png"
},
{
    name: "Mall",
    distance: "640m",
    image: "https://kodinyumba.app/media/shopping-center.png"
},
{
    name: "School",
    distance: "20m",
    image: "https://kodinyumba.app/media/school.png"
},
{
    name: "Mosque",
    distance: "120m",
    image: "https://kodinyumba.app/media/mosque.png"
},
{
    name: "Tarmac Road",
    distance: "50m",
    image: "https://kodinyumba.app/media/road.png"
},
{
    name: "Police Station",
    distance: "400m",
    image: "https://kodinyumba.app/media/police-station.png"
}
];

export function FacilitiesModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

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

        {/* Amenity Grid */}
        <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 border-y">
          {facilitiesList.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-2 text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-gray-800 text-sm">{item.name}</span>
              
            </div>
          ))}
        </div>

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
