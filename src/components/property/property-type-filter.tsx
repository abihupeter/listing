/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const propertyTypes = [
  {
    id: "apartment",
    name: "Apartment Units",
    image: "https://kodinyumba.app/media/house_metric_icons/apartment.png",
  },
  {
    id: "studio",
    name: "Studio",
    image: "https://kodinyumba.app/media/house_metric_icons/studio.png",
  },
  {
    id: "bungalow",
    name: "Bungalow",
    image: "https://kodinyumba.app/media/house_metric_icons/bungalow.png",
  },
  {
    id: "bedsitter",
    name: "Bedsitter",
    image: "https://kodinyumba.app/media/house_metric_icons/bedsitter.png",
  },
  {
    id: "sq",
    name: "Servant Quarters(SQ)",
    image: "https://kodinyumba.app/media/house_metric_icons/servant-quarter.png",
  },
  {
    id: "mansionette",
    name: "Mansionette",
    image: "https://kodinyumba.app/media/house_metric_icons/mansionette.png",
  },
  {
    id: "office",
    name: "Office",
    image: "https://kodinyumba.app/media/house_metric_icons/office.png",
  },
  {
    id: "stall",
    name: "Stall",
    image: "https://kodinyumba.app/media/house_metric_icons/stall.png",
  },
  {
    id: "shop",
    name: "Shop",
    image: "https://kodinyumba.app/media/house_metric_icons/shop.png",
  },
];

export function PropertyTypeFilter() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleType = (id: string) => {
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white border-b">
      <div className="mx-auto px-4 py-2 container">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {propertyTypes.map((type) => {
            const isSelected = selectedTypes.includes(type.id);
            return (
              <button
                key={type.id}
                onClick={() => toggleType(type.id)}
                className={`group flex flex-col items-center min-w-[100px] p-3 rounded-lg transition-colors ${
                  isSelected ? "bg-blue-50" : "hover:bg-gray-50"
                }`}
              >
                <img
                  src={type.image}
                  alt={type.name}
                  className="mb-1 w-7 h-7 object-contain"
                />
                <span
                  className={`font-medium text-sm text-center transition-all ${
                    isSelected ? "underline text-blue-600" : "group-hover:underline"
                  }`}
                >
                  {type.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
