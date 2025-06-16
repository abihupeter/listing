"use client"

import { useState } from "react"

const propertyTypes = [
  { id: "apartment", name: "Apartment Units", icon: "🏢" },
  { id: "studio", name: "Studio", icon: "🏠" },
  { id: "bungalow", name: "Bungalow", icon: "🏡" },
  { id: "bedsitter", name: "Bedsitter", icon: "🏠" },
  { id: "sq", name: "Servant Quarters(SQ)", icon: "🏠" },
  { id: "mansionette", name: "Mansionette", icon: "🏘️" },
  { id: "office", name: "Office", icon: "🏢" },
  { id: "stall", name: "Stall", icon: "🏪" },
  { id: "shop", name: "Shop", icon: "🛒" },
]

export function PropertyTypeFilter() {
  const [selectedType, setSelectedType] = useState("apartment")

  return (
    <div className="bg-white border-b">
      <div className="mx-auto px-4 py-4 container">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {propertyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`flex flex-col items-center min-w-[100px] p-3 rounded-lg transition-colors ${
                selectedType === type.id ? "bg-blue-50 text-blue-600 border-2 border-blue-200" : "hover:bg-gray-50"
              }`}
            >
              <div className="mb-2 text-2xl">{type.icon}</div>
              <span className="font-medium text-sm text-center">{type.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
