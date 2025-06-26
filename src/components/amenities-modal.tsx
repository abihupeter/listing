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
    <div className="fixed inset-0 z-50  flex items-center justify-center bg-black/80">
      <div className="relative bg-white w-full max-w-2xl rounded-lg p-6 shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <h2 className="text-xl font-semibold mb-6 text-center">
          All Amenities
        </h2>

        {/* Amenity Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {amenitiesList.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-2"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-sm text-gray-800">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-right">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
