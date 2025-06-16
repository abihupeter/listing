"use client";

export function PropertyFeatures() {
  const features = [
    "Air Conditioning",
    "Balcony",
    "Furnished",
    "Security",
    "Parking",
    "Swimming Pool"
  ];

  return (
    <div>
      <h3 className="mb-4 font-bold text-xl">Features</h3>
      <div className="gap-4 grid grid-cols-2 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="bg-blue-600 rounded-full w-2 h-2"></div>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}