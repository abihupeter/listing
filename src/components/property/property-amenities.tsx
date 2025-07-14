/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function PropertyAmenities() {
  const [showModal, setShowModal] = useState(false);

  const amenities = [
    {
      name: "Parking",
      icon: "https://kodinyumba.app/media/Icons/2023/06/21/signage.png",
  },
    {
      name: "Court",
      icon: `https://kodinyumba.app/media/Icons/2023/06/21/basketball-court.png`,
    },
    {
      name: "Laundry Services",
      icon: "https://kodinyumba.app/media/Icons/2023/06/21/washing.png",
  },
    {
      name: "CCTV",
      icon: `https://kodinyumba.app/media/Icons/2023/06/21/cctv.png`,
    },
    {
      name: "WiFi",
      icon: `https://kodinyumba.app/media/Icons/2023/06/21/wifi_1.png`,
    },
    {
      name: "Balcony",
      icon: `https://kodinyumba.app/media/Icons/2023/06/21/balcony.png`,
    },
    {
      name: "Gym",
      icon: `https://kodinyumba.app/media/Icons/2023/06/21/gym.png`,
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
      icon:
          "https://kodinyumba.app/media/Icons/2023/06/21/air-conditioner.png",
  },
  {
      name: "24 Hour Security",
      icon: "https://kodinyumba.app/media/Icons/2023/06/21/guard.png",
  },
    // You can add more amenities here
  ];

  return (
    <div className="relative py-6 border-gray-300 border-y">
      <h3 className="mb-3 text-xl">What this unit offers</h3>
      <h3 className="mb-4 font-bold text-xl">Amenities</h3>

      {/* Grid preview */}
      <div className="gap-4 grid grid-cols-2 md:grid-cols-4 mb-6">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex justify-center items-center bg-gray-100 rounded-lg w-8 h-8">
              <img
                src={amenity.icon}
                alt={amenity.name}
                className="w-6 h-6 object-contain"
              />
            </div>
            <span className="text-gray-700">{amenity.name}</span>
          </div>
        ))}
      </div>

      {/* Show all button */}
      <button
        onClick={() => setShowModal(true)}
        className="hover:bg-blue-50 px-4 py-2 border border-blue-600 rounded-md text-blue-600 transition"
      >
        Show all 34 amenities
      </button>

      {/* Modal */}
      {showModal && (
        <div className="z-51 fixed inset-0 flex justify-center items-center bg-black/80 bg-opacity-100">
          <div className="relative bg-white shadow-lg p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Close X */}
            <button
              onClick={() => setShowModal(false)}
              className="top-4 right-4 absolute text-gray-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="mb-4 font-semibold text-xl text-center">All Amenities</h2>
            <div className="gap-4 grid grid-cols-2 md:grid-cols-3">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex justify-center items-center bg-gray-100 rounded w-8 h-8">
                    <img
                      src={amenity.icon}
                      alt={amenity.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-gray-800">{amenity.name}</span>
                </div>
              ))}
            </div>
          
          </div>
        </div>
      )}
    </div>
  );
}
