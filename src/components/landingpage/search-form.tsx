"use client";

import { useState } from "react";
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

export default function SearchForm({ activeTab }: { activeTab: string }) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

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
              <SelectTrigger className={`${commonSelectTriggerClass} w-full h-12 text-gray-700`}>
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
              <SelectTrigger className={`${commonSelectTriggerClass} w-full h-12 text-gray-700`}>
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
              <SelectTrigger className={`${commonSelectTriggerClass} w-full h-16 text-gray-700`}>
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

        <FiltersModal isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
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

          {/* Location */}
          <Select>
            <SelectTrigger className={`${commonSelectTriggerClass} w-full`}>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem value="nairobi">Nairobi</SelectItem>
              <SelectItem value="mombasa">Mombasa</SelectItem>
              <SelectItem value="kisumu">Kisumu</SelectItem>
              <SelectItem value="nakuru">Nakuru</SelectItem>
            </SelectContent>
          </Select>

          {/* Price */}
          <Select>
            <SelectTrigger className={`${commonSelectTriggerClass} w-full`}>
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem value="0-10000">Ksh 0 - 10,000</SelectItem>
              <SelectItem value="10000-25000">Ksh 10,000 - 25,000</SelectItem>
              <SelectItem value="25000-50000">Ksh 25,000 - 50,000</SelectItem>
              <SelectItem value="50000+">Ksh 50,000+</SelectItem>
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
      </div>

      <FiltersModal isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
    </>
  );
}
