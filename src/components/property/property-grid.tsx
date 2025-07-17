"use client"

import { useState } from "react"
import { PropertyListingCard } from "./property-listing-card"
import { ChevronLeft, ChevronRight, RotateCw } from "lucide-react"
import { useGetAllPropertiesQuery } from "@/app/lib/apiSlice/property/propertySlice"

interface Property {
  id: string;
  images: string[];
  type?: 'Residential' | 'Commercial';
  price: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  rating: number;
  actionType: 'Rent' | 'Purchase' | 'Rent To Own';
}

export function PropertyGrid() {
  const [page, setPage] = useState(1)
  const pageSize = 12

  const { data: response, isLoading, isError, refetch } = useGetAllPropertiesQuery({})

  // Explicitly type the properties array
  const properties: Property[] = Array.isArray(response?.properties) 
    ? response.properties 
    : Array.isArray(response?.data) 
      ? response.data 
      : []

  const total = properties.length
  const totalPages = Math.ceil(total / pageSize)

  const paginatedProperties = properties.slice(
    (page - 1) * pageSize,
    page * pageSize
  )

  const getPageLabel = () => {
    const start = (page - 1) * pageSize + 1
    const end = Math.min(page * pageSize, total)
    return `${start}-${end} of ${total}`
  }

  const handleRetry = () => {
    refetch()
  }

  if (isLoading) {
    return (
      <div className="mx-auto px-4 pb-12 container">
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: pageSize }).map((_, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-200 animate-pulse h-48 w-full"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2"></div>
                <div className="flex space-x-2">
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-1/4"></div>
                </div>
                <div className="h-4 bg-gray-200 animate-pulse rounded w-1/3"></div>
                <div className="flex justify-between pt-2">
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-1/4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="mx-auto px-4 pb-12 container text-center py-8">
        <p className="text-red-500 mb-4">Failed to load properties. Please try again.</p>
        <button
          onClick={handleRetry}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors mx-auto"
        >
          <RotateCw className="w-4 h-4" />
          <span>Retry</span>
        </button>
      </div>
    )
  }

  if (properties.length === 0) {
    return (
      <div className="mx-auto px-4 pb-12 container text-center py-8">
        <p className="text-gray-500">No properties found</p>
      </div>
    )
  }

  return (
    <div className="mx-auto px-4 pb-12 container">
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {paginatedProperties.map((property: Property) => (
          <PropertyListingCard key={property.id} {...property} />
        ))}
      </div>

      {total > pageSize && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="font-medium text-sm text-gray-700">{getPageLabel()}</span>

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
  )
}