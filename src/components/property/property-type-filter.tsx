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
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="bg-white border-b">
      <div className="mx-auto px-4 py-4 container">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {propertyTypes.map((type) => {
            const isSelected = selectedType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className="group flex flex-col items-center min-w-[100px] p-3 rounded-lg transition-colors hover:bg-gray-50"
              >
                <img
                  src={type.image}
                  alt={type.name}
                  className="mb-0 w-7 h-7 object-contain"
                />
                <span
                  className={`font-medium text-sm text-center transition-all ${
                    isSelected
                      ? "underline text-blue-600"
                      : "group-hover:underline"
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
