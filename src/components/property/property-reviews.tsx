/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export function PropertyReviews() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 4.5,
      date: "March 2023",
      comment: "Great location and comfortable stay. Would recommend!",
      avatar: "/images/person_1.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 3.8,
      date: "February 2023",
      comment: "Nice place but could use some updates.",
      avatar: "/images/person_2.png",
    },
    {
      id: 3,
      name: "Jane Doe",
      rating: 4.9,
      date: "July 2023",
      comment: "Loved my stay here! Clean, cozy and well-located. Would definitely book again.",
      avatar: "/images/person_3.png",
    },
    {
      id: 4,
      name: "Joan Mwangi",
      rating: 4.5,
      date: "June 2025",
      comment: "The house was exactly as listed—clean, spacious, and in a quiet neighborhood.",
      avatar: "/images/person_@.avif",
    },
    {
      id: 5,
      name: "Thee Rock",
      rating: 4.5,
      date: "July 2023",
      comment: "Loved my stay here! Clean, cozy and well-located. Would definitely book again.",
      avatar: "/images/person_3.png",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const paginated = reviews.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="relative py-0 border-gray-300 border-b w-full">
      <h3 className="mb-6 font-bold text-xl text-left">Reviews</h3>

      <div className="flex flex-wrap w-full">
        {paginated.map((review) => (
          <div
            key={review.id}
            className="mb-6 px-4 w-full md:w-1/2"
          >
            <div className="flex flex-col justify-between bg-white shadow-sm p-6 border rounded-lg h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="rounded-full w-12 h-12 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                  </div>
                </div>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>

              <div className="flex items-center gap-1 mb-3 text-gray-600 text-sm">
                <Star className="fill-yellow-400 w-4 h-4 text-yellow-400" />
                <span>{review.rating}</span>
              </div>

              <p className="text-gray-700 text-sm break-words whitespace-normal">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows & Dots */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
          className="bg-gray-100 hover:bg-gray-200 disabled:opacity-30 p-2 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`h-2 w-6 rounded-full transition-colors duration-300 ${
                i === currentPage ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
          disabled={currentPage === totalPages - 1}
          className="bg-gray-100 hover:bg-gray-200 disabled:opacity-30 p-2 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
