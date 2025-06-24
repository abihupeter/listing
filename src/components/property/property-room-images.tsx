"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PropertyRoomImages() {
  // Let's assume we show 2 images at a time from a list of 6
  const imageNumbers = [1, 2, 3, 4, 5, 6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImages = () => {
    setCurrentIndex((prev) =>
      prev + 2 >= imageNumbers.length ? 0 : prev + 2
    );
  };

  const prevImages = () => {
    setCurrentIndex((prev) =>
      prev - 2 < 0 ? imageNumbers.length - 2 : prev - 2
    );
  };

  const currentImages = imageNumbers.slice(currentIndex, currentIndex + 2);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-xl">Room Images</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full" onClick={prevImages}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" className="rounded-full" onClick={nextImages}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="gap-4 grid grid-cols-2">
        {currentImages.map((num, index) => (
          <div key={index}>
            <img
              src={`https://kodinyumba.app/media/Stock/House/house${num}.jpg`}
              alt={`Room ${num}`}
              className="rounded-xl w-full h-48 object-cover"
            />
            <p className="mt-2 font-medium">{`Room ${num}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
