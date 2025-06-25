"use client";

export function PropertyDescription({ description }: { description: string }) {
  return (
    <div className="border-b py-6 space-y-4">
      <h3 className="mb-4 font-bold text-xl">Description</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}