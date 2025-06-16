"use client";

export function PropertyAmenities() {
  const amenities = [
    "WiFi",
    "Kitchen",
    "Washer",
    "Dryer",
    "TV",
    "Iron",
    "Heating",
    "Workspace"
  ];

  return (
    <div>
      <h3 className="mb-4 font-bold text-xl">Amenities</h3>
      <div className="gap-4 grid grid-cols-2 md:grid-cols-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="flex justify-center items-center bg-gray-100 rounded-lg w-6 h-6">
              <div className="bg-blue-600 rounded-sm w-4 h-4"></div>
            </div>
            <span className="text-gray-700">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}