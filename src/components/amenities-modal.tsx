/* eslint-disable @next/next/no-img-element */
"use client";

import { X } from "lucide-react";

const amenitiesList = [
  {
    name: "Parking",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/signage.png",
  },
  {
    name: "Court",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/basketball-court.png",
  },
  {
    name: "Laundry Services",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/washing.png",
  },
  {
    name: "CCTV",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/cctv.png",
  },
  {
    name: "WiFi",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/wifi_1.png",
  },
  {
    name: "Balcony",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/balcony.png",
  },
  {
    name: "Gym",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/gym.png",
  },
  {
    name: "Clothing Line",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/drying.png",
  },
  {
    name: "Swimming Pool",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/swimming-pool.png",
  },
  {
    name: "Air Conditioning",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/air-conditioner.png",
  },
  {
    name: "24 Hour Security",
    icon: "https://kodinyumba.app/media/Icons/2023/06/21/guard.png",
  },
];

export function AmenitiesModal({
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
          All Amenities
        </h2>

        {/* Amenity Grid */}
        <div className="gap-6 grid grid-cols-2 sm:grid-cols-3">
          {amenitiesList.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-2 text-center"
            >
              <img
                src={item.icon}
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
