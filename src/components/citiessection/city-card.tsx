/* eslint-disable @next/next/no-img-element */
'use client'

import { useRouter } from "next/navigation";

interface CityCardProps {
  name: string;
  propertyCount: number;
  image: string;
}

export function CityCard({ name, propertyCount, image }: CityCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/cities-listing?city=${encodeURIComponent(name)}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative flex-shrink-0 rounded-2xl min-w-[200px] h-64 overflow-hidden cursor-pointer"
    >
      <div className="relative h-full">
        <img
          src={image || "/placeholder.svg"}
          alt={`${name} city view`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-opacity-50 transition-all duration-300" />

        {/* City info overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
          <h3 className="mb-2 font-bold text-white text-2xl md:text-3xl">{name}</h3>
          <p className="text-white text-lg">{propertyCount} Properties</p>
        </div>
      </div>
    </div>
  );
}
