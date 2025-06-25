"use client";

import Image from "next/image";

export function PropertyFeatures() {
  const features = [
    {
      name: "Dedicated workspace",
      description: "A room that’s well-suited for working.",
      icon: "/images/office-desk.png",
    },
    {
      name: "Dive right in",
      description: "This is one of the few places in the area with a pool.",
      icon: "/images/swimming.png",
    }
  ];

  return (
    <div className="border-t border-b py-6 space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="min-w-[40px]">
            <Image
              src={feature.icon}
              alt={feature.name}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{feature.name}</p>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
