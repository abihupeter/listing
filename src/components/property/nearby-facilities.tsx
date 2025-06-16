"use client";

export function NearbyFacilities() {
  const facilities = [
    { name: "Supermarket", distance: "0.5 km" },
    { name: "Restaurant", distance: "0.3 km" },
    { name: "School", distance: "1.2 km" },
    { name: "Hospital", distance: "2.5 km" },
    { name: "Park", distance: "0.8 km" },
    { name: "Bus Stop", distance: "0.2 km" }
  ];

  return (
    <div>
      <h3 className="mb-4 font-bold text-xl">Nearby Facilities</h3>
      <div className="gap-4 grid grid-cols-2 md:grid-cols-3">
        {facilities.map((facility, index) => (
          <div key={index} className="p-3 border rounded-lg">
            <h4 className="font-medium">{facility.name}</h4>
            <p className="text-gray-600 text-sm">{facility.distance} away</p>
          </div>
        ))}
      </div>
    </div>
  );
}