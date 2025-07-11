"use client";

import { useState } from "react";
import { AllPropertyListingCard } from "./all-properties-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AllPropertyGridProps {
  limit?: number;
}
const properties = [
    {
        id: "01",
        image: `https://kodinyumba.app/media/Stock/House/house19.jpg,
            https://kodinyumba.app/media/Stock/House/house11.jpg,
            https://kodinyumba.app/media/Stock/House/house14.jpg,
            https://kodinyumba.app/media/Stock/House/house5.jpg,
            https://kodinyumba.app/media/Stock/House/house16.jpg,
            https://kodinyumba.app/media/Stock/House/house17.jpg,
            https://kodinyumba.app/media/Stock/House/house15.jpg`,
        type: "10 Units",
        price: "Ksh 15,000 – Ksh. 35,000",
        propertyType: "Johari Apartments",
        balcony: 1,
        stairs: "lift",
        rating: 2.3,
        actionType: "Purchase",
      },
  {
    id: "02",
    image: `https://kodinyumba.app/media/Stock/House/house6.jpg,
            https://kodinyumba.app/media/Stock/House/house11.jpg,
            https://kodinyumba.app/media/Stock/House/house14.jpg,
            https://kodinyumba.app/media/Stock/House/house15.jpg,
            https://kodinyumba.app/media/Stock/House/house16.jpg,
            https://kodinyumba.app/media/Stock/House/house17.jpg,
            https://kodinyumba.app/media/Stock/House/house18.jpg`,
    type: "10 Units",
    price: "Ksh 30,000 – Ksh. 65,000",
    propertyType: "Grey Heights Apartments",
    balcony: 2,
    stairs: "stairs",
    rating: 4.9,
    actionType: "Rent",
  },
  {
    id: "03",
    image: `https://kodinyumba.app/media/Stock/House/house12.jpg,
            https://kodinyumba.app/media/Stock/House/house11.jpg,
            https://kodinyumba.app/media/Stock/House/house14.jpg,
            https://kodinyumba.app/media/Stock/House/house15.jpg,
            https://kodinyumba.app/media/Stock/House/house16.jpg,
            https://kodinyumba.app/media/Stock/House/house20.jpg`,
    type: "21 Units",
    price: "Ksh 25,000 – Ksh. 65,000",
    propertyType: "Clairmont Apartment",
    balcony: 3,
    stairs: "stairs",
    rating: 1.6,
    actionType: "Rent To Own",
  },
  {
    id: "04",
    image: `https://kodinyumba.app/media/Stock/House/house16.jpg,
            https://kodinyumba.app/media/Stock/House/house11.jpg,
            https://kodinyumba.app/media/Stock/House/house14.jpg,
            https://kodinyumba.app/media/Stock/House/house15.jpg,
            https://kodinyumba.app/media/Stock/House/house9.jpg,
      https://kodinyumba.app/media/Stock/House/house17.jpg
    https://kodinyumba.app/media/Stock/House/house10.jpg`,
    type: "16 Units",
    price: "Ksh 10,000 – Ksh. 45,000",
    propertyType: "Vintage Apartment",
    balcony: 1,
    stairs: "lift",
    rating: 3.7,
    actionType: "Purchase",
  },
  {
    id: "05",
    image: `https://kodinyumba.app/media/Stock/House/house11.jpg,https://kodinyumba.app/media/Stock/House/house19.jpg`,
    type: "12 Units",
    price: "Ksh 15,000 – Ksh. 20,000",
    propertyType: "Willemy Apartments",
    balcony: 1,
    stairs: "lift",
    rating: 3.8,
    actionType: "Purchase",
  },
  {
    id: "06",
    image: `https://kodinyumba.app/media/Stock/House/house4.jpg,
            https://kodinyumba.app/media/Stock/House/house11.jpg,
            https://kodinyumba.app/media/Stock/House/house14.jpg,
            https://kodinyumba.app/media/Stock/House/house15.jpg,
            https://kodinyumba.app/media/Stock/House/house16.jpg,
            https://kodinyumba.app/media/Stock/House/house17.jpg
            `,
    type: "2 Units",
    price: "Ksh 15,000 – Ksh. 20,000",
    propertyType: "Bandari Apartments",
    balcony: 1,
    stairs: "stairs",
    rating: 3.7,
    actionType: "Purchase",
  },
];

export function AllPropertyGrid({ limit }: AllPropertyGridProps) {
  const [page, setPage] = useState(1);
  const pageSize = 12;
  const total = properties.length;
  const totalPages = Math.ceil(total / pageSize);

  const paginatedProperties = limit
    ? properties.slice(0, limit)
    : properties.slice((page - 1) * pageSize, page * pageSize);

  const getPageLabel = () => {
    const start = (page - 1) * pageSize + 1;
    const end = Math.min(page * pageSize, total);
    return `${start}-${end} of ${total}`;
  };

  return (
    <div className="mx-auto px-4 pb-12 container">
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {paginatedProperties.map((property) => (
          <AllPropertyListingCard key={property.id} {...property} />
        ))}
      </div>

      {/* Pagination only if no limit is applied */}
      {!limit && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="font-medium text-sm text-gray-700">
            {getPageLabel()}
          </span>

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
