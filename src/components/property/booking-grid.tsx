"use client";

import { BookingCard } from "./booking-card";

const bookingProperties = [
  {
  
    id: "A01",
    image: [
      "https://kodinyumba.app/media/Stock/House/house13.jpg",
      "https://kodinyumba.app/media/Stock/House/house14.jpg",
    ],
    price: "Ksh 20,000/month",
    propertyType: "commercial",
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.2,
    actionType: "Rent",
    date: "10AM 6th July 2025",
  },
  {
    id: "A02",
    image: [
      "https://kodinyumba.app/media/Stock/House/house18.jpg",
      "https://kodinyumba.app/media/Stock/House/house2.jpg",
    ],
    price: "Ksh 28,500/month",
    propertyType: "commercial",
    bedrooms: 2,
    bathrooms: 2,
    rating: 4.6,
    actionType: "Purchase",
    date: "10AM 6th July 2025",
  },
  {
    
    id: "A03",
    image: [
      "https://kodinyumba.app/media/Stock/House/house19.jpg",
      "https://kodinyumba.app/media/Stock/House/house7.jpg",
    ],
    price: "Ksh 12,500/month",
    propertyType: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    rating: 3.9,
    actionType: "Rent To Own",
    date: "10AM 6th July 2025",
  },
  {
  
    id: "A04",
    image: [
      "https://kodinyumba.app/media/Stock/House/house13.jpg",
      "https://kodinyumba.app/media/Stock/House/house12.jpg",
    ],
    price: "Ksh 8,500/month",
    propertyType: "Shop",
    bedrooms: 3,
    bathrooms: 1,
    rating: 3.6,
    actionType: "Purchase",
    date: "10AM 6th July 2025",
  },
];

export function BookingGrid() {
  return (
    <div className="container mx-auto px-2 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bookingProperties.map((property) => (
          <BookingCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
}
