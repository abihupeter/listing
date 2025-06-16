/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { PropertyInfo } from "./property-info";
import { PropertyDescription } from "./property-description";
import { PropertyRoomImages } from "./property-room-images";
import { PropertyFeatures } from "./property-features";
import { PropertyAmenities } from "./property-amenities";
import { PropertyReviews } from "./property-reviews";
import { PropertyLocation } from "./property-location";
import { NearbyFacilities } from "./nearby-facilities";
import { PropertyRules } from "./property-rules";

export function PropertyContent({ property }: { property: any }) {
  return (
    <div className="space-y-8 lg:col-span-2">
      <PropertyInfo 
        type={property.type} 
        bedrooms={property.bedrooms} 
        bathrooms={property.bathrooms} 
      />
      <PropertyFeatures />
      <PropertyDescription description={property.description} />
      <PropertyRoomImages />
      <PropertyAmenities />
      <PropertyReviews />
      <PropertyLocation />
      <NearbyFacilities />
      <PropertyRules />
    </div>
  );
}