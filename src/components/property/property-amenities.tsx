"use client";
/* import {
  Wifi,
  Tv,
  Iron,
  Flame,
  Briefcase,
  Kitchen,
  WashingMachine,
  Dryer
} from "lucide-react";

export function PropertyAmenities() {
  const amenities = [
    { name: "WiFi", icon: <Wifi className="w-5 h-5 text-blue-600" /> },
    { name: "Kitchen", icon: <Kitchen className="w-5 h-5 text-blue-600" /> },
    { name: "Washer", icon: <WashingMachine className="w-5 h-5 text-blue-600" /> },
    { name: "Dryer", icon: <Dryer className="w-5 h-5 text-blue-600" /> },
    { name: "TV", icon: <Tv className="w-5 h-5 text-blue-600" /> },
    { name: "Iron", icon: <Iron className="w-5 h-5 text-blue-600" /> },
    { name: "Heating", icon: <Flame className="w-5 h-5 text-blue-600" /> },
    { name: "Workspace", icon: <Briefcase className="w-5 h-5 text-blue-600" /> },
  ];
 */
  import {
    Car,
    Shirt,
    Waves,
    ShieldCheck,
    Tv,
    Wifi,
    Snowflake,
    MoveVertical,
    Briefcase
  } from "lucide-react";
  
  export function PropertyAmenities() {
    const amenities = [
      { name: "Parking", icon: <Car className="w-5 h-5 text-blue-600" /> },
      { name: "Laundry Services", icon: <Shirt className="w-5 h-5 text-blue-600" /> },
      { name: "Swimming Pool", icon: <Waves className="w-5 h-5 text-blue-600" /> },
     
      { name: "TV", icon: <Tv className="w-5 h-5 text-blue-600" /> },
      { name: "24 Hour Security", icon: <ShieldCheck className="w-5 h-5 text-blue-600" /> },
      { name: "Wifi", icon: <Wifi className="w-5 h-5 text-blue-600" /> },
      { name: "Clothing Line", icon: <Shirt className="w-5 h-5 text-blue-600" /> },
      { name: "Air Conditioning", icon: <Snowflake className="w-5 h-5 text-blue-600" /> },
      { name: "Elevator", icon: <MoveVertical className="w-5 h-5 text-blue-600" /> },
      { name: "Workspace", icon: <Briefcase className="w-5 h-5 text-blue-600" /> },
    ];
  
    return (
      <div>
        <h3 className="mb-4 font-bold text-xl">Amenities</h3>
        <div className="gap-4 grid grid-cols-2 md:grid-cols-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex justify-center items-center rounded-lg bg-gray-100 w-8 h-8">
                {amenity.icon}
              </div>
              <span className="text-gray-700">{amenity.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
