"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useGetPropertyNearbyFacilitiesQuery } from "@/app/lib/apiSlice/property/near-by-facilitiesSlice"; // Import the hook

interface AmenitiesFacilitiesTabsProps {
  apartmentId: string | undefined; // Add apartmentId prop
}

const amenities = [
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

export function AmenitiesFacilitiesTabs({
  apartmentId,
}: AmenitiesFacilitiesTabsProps) {
  const [activeTab, setActiveTab] = useState<"amenities" | "facilities">(
    "amenities"
  );

  // Fetch nearby facilities only when the 'facilities' tab is active AND apartmentId is available
  const {
    data: facilitiesData,
    isLoading: isFacilitiesLoading,
    error: facilitiesError,
  } = useGetPropertyNearbyFacilitiesQuery(apartmentId!, {
    skip: activeTab !== "facilities" || !apartmentId, // Skip if not on facilities tab or no ID
  });

  const isAmenities = activeTab === "amenities";

  // Determine items to display based on active tab and fetched data
  let itemsToShow: { name: string; image?: string; icon?: string }[] = [];

  if (isAmenities) {
    itemsToShow = amenities;
  } else {
    // For facilities tab, use fetched data or show loading/error
    if (isFacilitiesLoading) {
      itemsToShow = [{ name: "Loading...", icon: "" }]; // Placeholder for loading
    } else if (facilitiesError) {
      itemsToShow = [{ name: "Error loading facilities", icon: "" }]; // Placeholder for error
      console.error("Error fetching facilities:", facilitiesError);
    } else if (facilitiesData?.data && facilitiesData.data.length > 0) {
      itemsToShow = facilitiesData.data.map((facility: any) => ({
        // Assuming API returns 'name' and 'image'
        name: facility.name,
        image: facility.image,
      }));
    } else {
      itemsToShow = [{ name: "No facilities found", icon: "" }];
    }
  }

  return (
    <div className="mx-auto px-4 container">
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <Button
          onClick={() => setActiveTab("amenities")}
          className={` px-6 py-2 font-semibold transition-colors border 
            ${
              isAmenities
                ? "bg-white text-blue-600 border-blue-600"
                : "bg-white text-gray-500 border-gray-300"
            }`}
        >
          Amenities
        </Button>
        <Button
          onClick={() => setActiveTab("facilities")}
          className={` px-6 py-2 font-semibold transition-colors border 
            ${
              !isAmenities
                ? "bg-white text-blue-600 border-blue-600"
                : "bg-white text-gray-500 border-gray-300"
            }`}
        >
          Nearby Facilities
        </Button>
      </div>

      {/* Horizontally Scrollable Content */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max pb-4">
          {itemsToShow.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-24 text-center"
            >
              <Image
                src={item.icon || item.image || "/placeholder.png"} // Use placeholder if no image/icon
                alt={item.name}
                width={25}
                height={25}
                className="object-contain"
              />
              <p className="text-sm mt-2 text-gray-700 font-medium">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
