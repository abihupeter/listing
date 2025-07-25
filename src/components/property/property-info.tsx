"use client";

export function PropertyInfo({ 
  type, 
  bedrooms, 
  bathrooms 
}: { 
  type: string; 
  bedrooms: number; 
  bathrooms: number; 
}) {
  return (
    <div className="flex items-center justify-between gap-8">
      <div>
        <h2 className="mb-2 font-bold text-2xl">{type}</h2>
        <p className="text-gray-600">
          {bedrooms} bedrooms • {bathrooms} bathrooms
        </p>
      </div>
      
      <div className="font-fonarto text-2xl text-[30px] text-blue-600 font-bold">
      Kodi
    </div>
  </div>
  );
}
