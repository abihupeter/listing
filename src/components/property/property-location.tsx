"use client";

export function PropertyLocation() {
  return (
    <div>
      <h3 className="mb-4 font-bold text-xl">Location</h3>
      <div className="bg-gray-200 mb-4 rounded-xl h-64">
        {/* Map placeholder */}
        <div className="flex justify-center items-center w-full h-full text-gray-500">
          Map will be displayed here
        </div>
      </div>
      <p className="text-gray-700">
        The property is located in a quiet neighborhood with easy access to 
        shopping centers, restaurants, and public transportation.
      </p>
    </div>
  );
}