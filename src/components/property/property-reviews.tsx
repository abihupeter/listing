"use client";

import { Star } from "lucide-react";

export function PropertyReviews() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 4.5,
      date: "March 2023",
      comment: "Great location and comfortable stay. Would recommend!"
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 3.8,
      date: "February 2023",
      comment: "Nice place but could use some updates."
    }
  ];

  return (
    <div>
      <h3 className="mb-4 font-bold text-xl">Reviews</h3>
      <div className="space-y-6">
        {reviews.map(review => (
          <div key={review.id} className="pb-6 border-b">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium">{review.name}</h4>
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <Star className="fill-yellow-400 w-4 h-4 text-yellow-400" />
                  <span>{review.rating}</span>
                </div>
              </div>
              <span className="text-gray-500 text-sm">{review.date}</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}