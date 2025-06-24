"use client";

export function NearbyFacilities() {
  const facilities = [
    { name: "Supermarket", distance: "0.5 km", icon: "/assets/shopping-center.png" },
    { name: "Restaurant", distance: "0.3 km", icon: "/assets/villa.png" },
    { name: "School", distance: "1.2 km", icon: "/assets/school.png" },
    { name: "Hospital", distance: "2.5 km", icon: "/assets/hospital.png" },
    { name: "church", distance: "0.8 km", icon: "/assets/church.png" },
    { name: "police station", distance: "0.2 km", icon: "/assets/police-station.png" },
  ];

  return (
    <div>
      <h3 className="mb-4 font-bold text-xl">Nearby Facilities</h3>
      <div className="gap-4 grid grid-cols-2 md:grid-cols-3">
        {facilities.map((facility, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
            <img
              src={facility.icon}
              alt={facility.name}
              className="w-10 h-10 object-contain rounded-full"
            />
            <div>
              <h4 className="font-medium">{facility.name}</h4>
              <p className="text-gray-600 text-sm">{facility.distance} away</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
