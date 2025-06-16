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
    <div className="flex items-center gap-8">
      <div>
        <h2 className="mb-2 font-bold text-2xl">{type}</h2>
        <p className="text-gray-600">
          {bedrooms} bedrooms • {bathrooms} bathrooms
        </p>
      </div>
      <div className="flex justify-center items-center bg-yellow-400 rounded-xl w-12 h-12">
        <div className="bg-black rounded-full w-6 h-1"></div>
      </div>
    </div>
  );
}