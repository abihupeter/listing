"use client";

export function NearbyFacilities() {
  const facilities = [
    {
      name: "Church",
      distance: "120m",
      image: "https://kodinyumba.app/media/church.png"
  },
  {
      name: "Hospital",
      distance: "500m",
      image: "https://kodinyumba.app/media/hospital.png"
  },
  {
      name: "Mall",
      distance: "640m",
      image: "https://kodinyumba.app/media/shopping-center.png"
  },
  {
      name: "School",
      distance: "20m",
      image: "https://kodinyumba.app/media/school.png"
  },
  {
      name: "Mosque",
      distance: "120m",
      image: "https://kodinyumba.app/media/mosque.png"
  },
  {
      name: "Tarmac Road",
      distance: "50m",
      image: "https://kodinyumba.app/media/road.png"
  },
  {
      name: "Police Station",
      distance: "400m",
      image: "https://kodinyumba.app/media/police-station.png"
  }
  ];

  return (
    <div className="border-t border-gray-300 py-6 relative">
      <h3 className="mb-4 font-bold text-xl">Nearby Facilities</h3>
      <div className="gap-4 grid grid-cols-2 md:grid-cols-3">
        {facilities.map((facility, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
            <img
              src={facility.image}
              alt={facility.name}
              className="w-13 h-13 object-contain rounded-lg"
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
