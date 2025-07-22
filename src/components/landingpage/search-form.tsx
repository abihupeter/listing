// src/components/landingpage/search-form.tsx
"use client";

import { useState, useEffect } from "react"; // Import useEffect
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { FiltersModal } from "@/components/property/filters-modal";
import { useGetPropertiesByLocationQuery } from "@/app/lib/apiSlice/property/properties-by-locationSlice"; // Import location slice
import { useFilterPropertiesByPriceQuery } from "@/app/lib/apiSlice/property/filter-properties-by-priceSlice"; // Import price slice

export default function SearchForm({ activeTab }: { activeTab: string }) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  // States for Rent tab filters
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  // Parse price range string to min/max numbers
  const parsePriceRange = (range: string) => {
    if (!range) {
      setMinPrice(undefined);
      setMaxPrice(undefined);
      return;
    }
    const [minStr, maxStr] = range.split("-");
    const parsedMin = parseInt(
      minStr.replace("Ksh ", "").replace("M", "000000").replace("+", ""),
      10
    );
    const parsedMax = maxStr
      ? parseInt(
          maxStr.replace("Ksh ", "").replace("M", "000000").replace("+", ""),
          10
        )
      : undefined;

    setMinPrice(parsedMin);
    setMaxPrice(parsedMax);
  };

  // Trigger queries based on selected values
  const {
    data: locationProperties,
    isLoading: isLocationLoading,
    error: locationError,
  } = useGetPropertiesByLocationQuery(selectedLocation, {
    skip: !selectedLocation, 
  });

  const {
    data: priceFilteredProperties,
    isLoading: isPriceLoading,
    error: priceError,
  } = useFilterPropertiesByPriceQuery(
    { min_price_range: minPrice, max_price_range: maxPrice },
    {
      skip: minPrice === undefined && maxPrice === undefined, 
    }
  );

  const commonInputClass = "border-gray-200 focus:border-blue-500 h-11";
  const commonSelectTriggerClass = "border-gray-200 focus:border-blue-500 h-25";
  const commonButtonClass =
    "h-14 px-4 font-semibold text-white text-base flex items-center justify-center";

  if (activeTab === "buy") {
    return (
      <>
        <div className="bg-white shadow-2xl p-6 rounded-2xl w-full max-w-[90rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {/* Location Input */}
            <Input
              placeholder="Enter Location..."
              className={`${commonInputClass} w-full h-10`}
            />

            {/* Property Type */}
            <Select>
              <SelectTrigger
                className={`${commonSelectTriggerClass} w-full h-12 text-gray-700`}
              >
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="land">Land</SelectItem>
              </SelectContent>
            </Select>

            {/* Budget Range */}
            <Select>
              <SelectTrigger
                className={`${commonSelectTriggerClass} w-full h-12 text-gray-700`}
              >
                <SelectValue placeholder="Budget Range" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="0-1m">Ksh 0 - 1M</SelectItem>
                <SelectItem value="1m-5m">Ksh 1M - 5M</SelectItem>
                <SelectItem value="5m-10m">Ksh 5M - 10M</SelectItem>
                <SelectItem value="10m-20m">Ksh 10M - 20M</SelectItem>
                <SelectItem value="20m+">Ksh 20M+</SelectItem>
              </SelectContent>
            </Select>

            {/* Bedrooms */}
            <Select>
              <SelectTrigger
                className={`${commonSelectTriggerClass} w-full h-16 text-gray-700`}
              >
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="1">1 Bedroom</SelectItem>
                <SelectItem value="2">2 Bedrooms</SelectItem>
                <SelectItem value="3">3 Bedrooms</SelectItem>
                <SelectItem value="4">4+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>

            {/* Advanced Button */}
            <Button
              variant="outline"
              onClick={() => setIsFiltersOpen(true)}
              className={`w-full h-8 bg-slate-800 hover:bg-slate-700 text-white border-slate-800 ${commonButtonClass}`}
            >
              <span className="hidden sm:inline">Advanced</span>
              <ChevronDown className="sm:ml-2 w-4 h-4" />
            </Button>

            {/* Search Button */}
            <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 font-semibold text-white text-base">
              Find Properties
            </Button>
          </div>
        </div>

        <FiltersModal
          isOpen={isFiltersOpen}
          onClose={() => setIsFiltersOpen(false)}
        />
      </>
    );
  }

  // Rent tab
  return (
    <>
      <div className="bg-white shadow-2xl p-6 rounded-2xl w-full max-w-[90rem] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-end">
          {/* Keyword input */}
          <Input
            placeholder="Enter Keyword..."
            className={`${commonInputClass} h-10`}
          />

          {/* Property type */}
          <Select>
            <SelectTrigger className={`${commonSelectTriggerClass} w-full`}>
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
            </SelectContent>
          </Select>

          {/* Location - Dynamically uses selected location for fetching, dropdown is still hardcoded for demonstration */}
          <Select onValueChange={setSelectedLocation} value={selectedLocation}>
            <SelectTrigger className={`${commonSelectTriggerClass} w-full`}>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem value="Nairobi">Nairobi</SelectItem>
              <SelectItem value="Mombasa">Mombasa</SelectItem>
              <SelectItem value="Kisumu">Kisumu</SelectItem>
              <SelectItem value="Nakuru">Nakuru</SelectItem>
              {/* Add more locations as needed, if a list of all possible locations is not available from an API */}
            </SelectContent>
          </Select>

          {/* Price - Dynamically uses selected price range for fetching, dropdown is still hardcoded for demonstration */}
          <Select
            onValueChange={(value) => {
              setSelectedPriceRange(value);
              parsePriceRange(value);
            }}
            value={selectedPriceRange}
          >
            <SelectTrigger className={`${commonSelectTriggerClass} w-full`}>
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem value="0-10000">Ksh 0 - 10,000</SelectItem>
              <SelectItem value="10000-25000">Ksh 10,000 - 25,000</SelectItem>
              <SelectItem value="25000-50000">Ksh 25,000 - 50,000</SelectItem>
              <SelectItem value="50000+">Ksh 50,000+</SelectItem>
              {/* Add more price ranges as needed */}
            </SelectContent>
          </Select>

          {/* Advanced Button */}
          <Button
            variant="outline"
            onClick={() => setIsFiltersOpen(true)}
            className={`bg-slate-800 hover:bg-slate-700 border-slate-800 ${commonButtonClass}`}
          >
            <span className="hidden sm:inline">Advanced</span>
            <ChevronDown className="sm:ml-2 w-4 h-4" />
          </Button>

          {/* Search Button */}
          <Button className="bg-blue-600 hover:bg-blue-700 w-full h-14 font-semibold text-base text-white">
            Search
          </Button>
        </div>

        {/* Display fetched data or loading/error states for demonstration */}
        <div className="mt-6 p-4 border rounded-lg bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">
            Filtered Properties
          </h3>
          {isLocationLoading || isPriceLoading ? (
            <p>Loading properties...</p>
          ) : locationError || priceError ? (
            <p className="text-red-500">
              Error fetching properties. Please check console for details.
            </p>
          ) : (
            <>
              {selectedLocation && locationProperties && (
                <div className="mb-4">
                  <h4 className="font-medium">
                    Properties in {selectedLocation}:
                  </h4>
                  <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto max-h-40">
                    {JSON.stringify(locationProperties, null, 2)}
                  </pre>
                </div>
              )}
              {(minPrice !== undefined || maxPrice !== undefined) &&
                priceFilteredProperties && (
                  <div>
                    <h4 className="font-medium">
                      Properties filtered by price (Ksh {selectedPriceRange}):
                    </h4>
                    <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto max-h-40">
                      {JSON.stringify(priceFilteredProperties, null, 2)}
                    </pre>
                  </div>
                )}
              {!selectedLocation &&
                minPrice === undefined &&
                maxPrice === undefined && (
                  <p>
                    Select a location or price range to see filtered properties.
                  </p>
                )}
            </>
          )}
        </div>
      </div>

      <FiltersModal
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
      />
    </>
  );
}
