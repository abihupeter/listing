/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from "react";

// Property interface
interface Property {
  id: number;
  title: string;
  city: string;
  price: string;
  image: string;
}

// Props for CityPropertyGrid
interface CityPropertyGridProps {
  selectedCity: string;
}

// Property data (can be moved to a separate mock data file later)
const allProperties: Property[] = [
  {
    id: 1,
    title: 'Modern Apartment',
    city: 'Nairobi',
    price: 'Ksh 85,000/mo',
    image: '/images/bungoma.jpg',
  },
  {
    id: 2,
    title: 'Lakeview Bungalow',
    city: 'Kisumu',
    price: 'Ksh 60,000/mo',
    image: '/images/florida.jpg',
  },
  {
    id: 3,
    title: 'Cozy Cottage',
    city: 'Narok',
    price: 'Ksh 30,000/mo',
    image: '/images/LA.jpg',
  },
  {
    id: 4,
    title: 'Penthouse Suite',
    city: 'Nairobi',
    price: 'Ksh 120,000/mo',
    image: '/images/NY.jpg',
  },
  {
    id: 5,
    title: 'Suburban Home',
    city: 'Nakuru',
    price: 'Ksh 45,000/mo',
    image: '/images/miami.jpg',
  },
  {
    id: 6,
    title: 'Simple Studio',
    city: 'Kakamega',
    price: 'Ksh 18,000/mo',
    image: '/images/kakamega.jpg',
  },
  {
    id: 6,
    title: 'Simple Studio',
    city: 'Bungoma',
    price: 'Ksh 18,000/mo',
    image: '/images/kakamega.jpg',
  },
];

// Grid Component (used in main city filter)
export function CityPropertyGrid({ selectedCity }: CityPropertyGridProps) {
  const filteredProperties =
    selectedCity === 'All'
      ? allProperties
      : allProperties.filter(
          (p) => p.city.toLowerCase() === selectedCity.toLowerCase()
        );

  return (
    <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{property.title}</h3>
              <p className="text-gray-500">{property.city}</p>
              <p className="mt-2 font-bold text-blue-600">{property.price}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-gray-600 text-center">
          No properties found for {selectedCity}.
        </p>
      )}
    </div>
  );
}

// Wrapper (for demo/testing)
export function CityPropertyGridWrapper() {
  const [selectedCity, setSelectedCity] = useState('All');

  return (
    <div className="mx-auto px-4 py-8 container">
      <h2 className="mb-6 font-bold text-2xl">Properties in {selectedCity}</h2>

      <div className="mb-6">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="shadow-sm p-2 border rounded-md"
        >
          <option value="All">All Cities</option>
          <option value="Nairobi">Nairobi</option>
          <option value="Kisumu">Kisumu</option>
          <option value="Narok">Narok</option>
          <option value="Nakuru">Nakuru</option>
          <option value="Kakamega">Kakamega</option>
        </select>
      </div>

      <CityPropertyGrid selectedCity={selectedCity} />
    </div>
  );
}
