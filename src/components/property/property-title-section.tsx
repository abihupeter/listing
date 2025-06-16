"use client";

import { Star } from "lucide-react";

export function PropertyTitleSection({
  title,
  rating,
  reviewCount,
  location
}: {
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
}) {
  return (
    <div>
      <h1 className="mb-2 font-bold text-3xl">{title}</h1>
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <Star className="fill-yellow-400 w-4 h-4 text-yellow-400" />
          <span className="font-medium">{rating}</span>
        </div>
        <button className="underline hover:no-underline">{reviewCount} reviews</button>
        <span>•</span>
        <button className="underline hover:no-underline">{location}</button>
      </div>
    </div>
  );
}