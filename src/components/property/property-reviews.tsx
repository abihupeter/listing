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
    },
    {
      id: 3,
      name: "Jane doe",
      rating: 4.9,
      date: "July 2023",
      comment: "Loved my stay here! Clean, cozy and well-located. Would definitely book again."
    },
    {
      id: 4,
      Name: "Jane Mwangi",
      rating: 4.5,
      date: "June 2025",
      comment: "The house was exactly as listed—clean, spacious, and in a quiet neighborhood. The WiFi and hot shower worked perfectly. The host was responsive and check-in was smooth. Only minor issue was the lack of extra towels, but overall a great stay!"
    }    
  ];

  return (
    <div className="border-b border-gray-300 py-6 relative">
      <h3 className="mb-4 font-bold text-xl">Reviews</h3>
  
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="min-w-[280px] flex-shrink-0 border rounded-lg p-4 shadow-sm bg-white"
          >
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
            <p className="text-gray-700 text-sm">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
}