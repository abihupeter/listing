/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function PropertySidebar({ property }: { property: any }) {
  return (
    <div className="lg:col-span-1">
      <div className="top-4 sticky bg-white shadow-lg p-6 border rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="font-bold text-2xl">
              {property.price}
              <span className="font-normal text-gray-600 text-lg">
                {property.period}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Star className="fill-yellow-400 w-4 h-4 text-yellow-400" />
            <span className="font-medium">{property.rating}</span>
            <span>•</span>
            <button className="text-sm underline">
              {property.reviewCount} reviews
            </button>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="gap-4 grid grid-cols-2 p-4 border rounded-lg text-sm">
            <div>
              <div className="font-medium">Date Posted</div>
              <div className="text-gray-600">{property.datePosted}</div>
            </div>
            <div>
              <div className="font-medium">Type</div>
              <div className="text-gray-600">{property.listingType}</div>
            </div>
            <div className="col-span-2 pt-2 border-t">
              <div className="font-medium">Past Tenants</div>
              <div className="text-gray-600">
                {property.pastTenants} Tenants
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://www.kodinyumba.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 py-3 rounded-xl w-full font-medium text-white text-lg">
            Book Viewing
          </Button>
        </a>
      </div>
    </div>
  );
}
