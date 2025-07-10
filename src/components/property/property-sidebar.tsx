/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function PropertySidebar({ property }: { property: any }) {
  const [isMinimized, setIsMinimized] = useState(false);

  // Only apply scroll minimization on large screens
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) return; // Ignore on mobile

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      const nearBottom = scrollTop + windowHeight >= documentHeight - 100;
      setIsMinimized(nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lg:col-span-1">
      {/* Mobile: Always minimized | Desktop: Minimizable */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-t shadow-md
          py-2 px-4
          lg:static lg:sticky lg:top-4 lg:rounded-2xl lg:border lg:shadow-lg
          ${isMinimized ? "lg:py-2 lg:px-4" : "lg:p-6"}
        `}
      >
        {/* Header (Price + Rating) - Always shown */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="font-bold text-xl lg:text-2xl">
              {property.price}
              <span className="font-normal text-gray-600 text-base lg:text-lg">
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

        {/* Extra Info - Shown only on large screens when not minimized */}
        {!isMinimized && (
          <div className="hidden lg:block space-y-4 mb-6">
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
        )}

        {/* CTA Button - Always visible */}
        <a
          href="https://www.kodinyumba.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button
            className={`bg-blue-600 hover:bg-blue-700 rounded-xl w-full text-white text-lg font-medium ${
              isMinimized || true ? "py-2 text-sm" : "py-3"
            }`}
          >
            Book Viewing
          </Button>
        </a>
      </div>
    </div>
  );
}
