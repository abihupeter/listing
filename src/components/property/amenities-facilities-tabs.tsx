"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const amenities = [
  { name: "Parking", icon: "https://kodinyumba.app/media/Icons/2023/06/21/signage.png" },
  { name: "Court", icon: "https://kodinyumba.app/media/Icons/2023/06/21/basketball-court.png" },
  { name: "Laundry Services", icon: "https://kodinyumba.app/media/Icons/2023/06/21/washing.png" },
  { name: "CCTV", icon: "https://kodinyumba.app/media/Icons/2023/06/21/cctv.png" },
  { name: "WiFi", icon: "https://kodinyumba.app/media/Icons/2023/06/21/wifi_1.png" },
  { name: "Balcony", icon: "https://kodinyumba.app/media/Icons/2023/06/21/balcony.png" },
  { name: "Gym", icon: "https://kodinyumba.app/media/Icons/2023/06/21/gym.png" },
  { name: "Clothing Line", icon: "https://kodinyumba.app/media/Icons/2023/06/21/drying.png" },
  { name: "Swimming Pool", icon: "https://kodinyumba.app/media/Icons/2023/06/21/swimming-pool.png" },
  { name: "Air Conditioning", icon: "https://kodinyumba.app/media/Icons/2023/06/21/air-conditioner.png" },
  { name: "24 Hour Security", icon: "https://kodinyumba.app/media/Icons/2023/06/21/guard.png" },
];

const facilities = [
  { name: "Church", image: "https://kodinyumba.app/media/church.png" },
  { name: "Hospital", image: "https://kodinyumba.app/media/hospital.png" },
  { name: "Mall", image: "https://kodinyumba.app/media/shopping-center.png" },
  { name: "School", image: "https://kodinyumba.app/media/school.png" },
  { name: "Mosque", image: "https://kodinyumba.app/media/mosque.png" },
  { name: "Tarmac Road", image: "https://kodinyumba.app/media/road.png" },
  { name: "Police Station", image: "https://kodinyumba.app/media/police-station.png" },
];

export function AmenitiesFacilitiesTabs() {
  const [activeTab, setActiveTab] = useState<"amenities" | "facilities">("amenities");

  const isAmenities = activeTab === "amenities";
  const items = isAmenities ? amenities : facilities;

  return (
    <div className="mx-auto px-4 container">
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <Button
          onClick={() => setActiveTab("amenities")}
          className={` px-6 py-2 font-semibold transition-colors border 
            ${isAmenities 
              ? "bg-white text-blue-600 border-blue-600" 
              : "bg-white text-gray-500 border-gray-300"}`}
        >
          Amenities
        </Button>
        <Button
          onClick={() => setActiveTab("facilities")}
          className={` px-6 py-2 font-semibold transition-colors border 
            ${!isAmenities 
              ? "bg-white text-blue-600 border-blue-600" 
              : "bg-white text-gray-500 border-gray-300"}`}
        >
          Nearby Facilities
        </Button>
      </div>

      {/* Horizontally Scrollable Content */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max pb-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-24 text-center"
            >
              <Image
                src={"icon" in item ? item.icon : item.image}
                alt={item.name}
                width={25}
                height={25}
                className="object-contain"
              />
              <p className="text-sm mt-2 text-gray-700 font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
