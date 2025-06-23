"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function SearchForm({ activeTab }: { activeTab: string }) {
  if (activeTab === "buy") {
    return (
      <div className="bg-white shadow-2xl p-6 rounded-2xl w-full max-w-6xl">
        <div className="items-end gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Input placeholder="Enter Location..." className="border-gray-200 focus:border-blue-500 h-14" />
          </div>
          <div className="lg:col-span-1">
            <Select>
              <SelectTrigger className="border-gray-200 focus:border-blue-500 h-14">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="land">Land</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="lg:col-span-1">
            <Select>
              <SelectTrigger className="border-gray-200 focus:border-blue-500 h-14">
                <SelectValue placeholder="Budget Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1m">Ksh 0 - 1M</SelectItem>
                <SelectItem value="1m-5m">Ksh 1M - 5M</SelectItem>
                <SelectItem value="5m-10m">Ksh 5M - 10M</SelectItem>
                <SelectItem value="10m-20m">Ksh 10M - 20M</SelectItem>
                <SelectItem value="20m+">Ksh 20M+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 lg:col-span-1">
            <Select>
              <SelectTrigger className="border-gray-200 focus:border-blue-500 h-14">
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Bedroom</SelectItem>
                <SelectItem value="2">2 Bedrooms</SelectItem>
                <SelectItem value="3">3 Bedrooms</SelectItem>
                <SelectItem value="4">4+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="lg"
              className="bg-slate-800 hover:bg-slate-700 px-4 border-slate-800 h-14 text-white"
            >
              <span className="hidden sm:inline">Advanced</span>
              <ChevronDown className="sm:ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="lg:col-span-1">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full h-14 font-semibold text-lg">
              Find Properties
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Rent search form
  return (
    <div className="bg-white shadow-2xl p-6 rounded-2xl w-full max-w-6xl">
      <div className="items-end gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Input placeholder="Enter Keyword..." className="border-gray-200 focus:border-blue-500 h-14" />
        </div>
        <div className="lg:col-span-1">
          <Select>
            <SelectTrigger className="border-gray-200 focus:border-blue-500 h-14">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="lg:col-span-1">
          <Select>
            <SelectTrigger className="border-gray-200 focus:border-blue-500 h-14">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nairobi">Nairobi</SelectItem>
              <SelectItem value="mombasa">Mombasa</SelectItem>
              <SelectItem value="kisumu">Kisumu</SelectItem>
              <SelectItem value="nakuru">Nakuru</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2 lg:col-span-1">
          <Select>
            <SelectTrigger className="border-gray-200 focus:border-blue-500 h-14">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-10000">Ksh 0 - 10,000</SelectItem>
              <SelectItem value="10000-25000">Ksh 10,000 - 25,000</SelectItem>
              <SelectItem value="25000-50000">Ksh 25,000 - 50,000</SelectItem>
              <SelectItem value="50000+">Ksh 50,000+</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="lg"
            className="bg-slate-800 hover:bg-slate-700 px-4 border-slate-800 h-14 text-white"
          >
            <span className="hidden sm:inline">Advanced</span>
            <ChevronDown className="sm:ml-2 w-4 h-4" />
          </Button>
        </div>
        <div className="lg:col-span-1">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full h-14 font-semibold text-lg">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}