"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React from "react";

interface BookingCardProps {
  id: string;
  image: string[];
  price: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  rating: number;
  actionType: string;
  date: string;
}

export function BookingCard({
  id,
  image,
  price,
  propertyType,
  bedrooms,
  bathrooms,
  rating,
  actionType,
  date,
}: BookingCardProps) {
  const [liked, setLiked] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const getActionTypeColor = (action: string) => {
    switch (action) {
      case "Rent":
        return "bg-green-600";
      case "Purchase":
        return "bg-blue-600";
      case "Rent To Own":
        return "bg-purple-600";
      default:
        return "bg-gray-600";
    }
  };

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCardClick = () => {
   window.open(`/unit/${id}`, "_blank");
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white shadow-lg hover:shadow-xl rounded-2xl overflow-hidden transition-shadow duration-300 cursor-pointer"
    >
      <div className="group relative h-48 overflow-hidden">
        <img
          src={image[currentImageIndex] || "/placeholder.svg"}
          alt={propertyType}
          className="w-full h-full object-cover transition-all duration-500"
        />

        {image.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="top-1/2 left-2 absolute bg-white/80 opacity-0 group-hover:opacity-100 p-1 rounded-full transition-opacity -translate-y-1/2 transform"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="top-1/2 right-2 absolute bg-white/80 opacity-0 group-hover:opacity-100 p-1 rounded-full transition-opacity -translate-y-1/2 transform"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        <div className="top-4 left-4 absolute">
          <span className="bg-white/90 px-3 py-1 rounded-full font-medium text-gray-800 text-sm">
            {propertyType}
          </span>
        </div>

        <div className="bottom-4 left-4 absolute">
          <span
            className={`${getActionTypeColor(
              actionType
            )} text-white px-3 py-1 rounded-full text-sm font-medium`}
          >
            {actionType}
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked((prev) => !prev);
          }}
          className="top-4 right-4 absolute bg-white/80 p-2 rounded-full"
        >
          <img
            src={"/images/heart__1_.png"}
            alt="Favorite"
            className="w-5 h-5 object-contain"
          />
        </button>

        <div className="bottom-2 left-1/2 absolute flex gap-1 -translate-x-1/2">
          {image.map((_, index) => (
            <span
              key={index}
              className={`h-[2px] w-6 rounded transition-colors duration-300 ${
                index === currentImageIndex ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-2 items-center">
            <span className="font-bold text-gray-900 text-lg">{id}</span>
            <span className="text-black">·</span>
            <span className="text-white text-[10px]  font-medium bg-green-600 px-2 py-[2px] rounded">
              {date}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="fill-yellow-400 w-4 h-4 text-yellow-400" />
            <span className="text-gray-600 text-sm">{rating}</span>
          </div>
        </div>
        <div className="mb-1 font-bold text-gray-900 text-xl">{price}</div>
        <div className="mb-3 text-gray-600">{propertyType}</div>
        <div className="flex items-center gap-4 text-gray-600 text-sm">
          <span>{bedrooms} Bedrooms</span>
          <span>•</span>
          <span>
            {bathrooms} Bathroom{bathrooms > 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
