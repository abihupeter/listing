"use client";

import { useRouter } from "next/navigation";
import { PropertyHeader } from "@/components/property/property-header";
import { PropertyImageGallery } from "@/components/property/property-image-gallery";
import { PropertyContent } from "@/components/property/property-content";
import { PropertySidebar } from "@/components/property/property-sidebar";
import { PropertyTitleSection } from "@/components/property/property-title-section";
import { PropertyActionButtons } from "@/components/property/property-action-buttons";
import { Footer } from "@/components/footer";

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  period: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  rating: number;
  reviewCount: number;
  datePosted: string;
  listingType: string;
  pastTenants: number;
  images: string[];
  description: string;
}

export default function UnitClient({ property }: { property: Property }) {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen">
      <PropertyHeader router={router} />

      <div className="mx-auto px-4 py-6 container">
        <div className="flex justify-between items-start mb-6">
          <PropertyTitleSection 
            title={property.title}
            rating={property.rating}
            reviewCount={property.reviewCount}
            location={property.location}
          />
          <PropertyActionButtons />
        </div>

        <PropertyImageGallery images={property.images} />

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3 mt-8">
          <PropertyContent property={property} />
          <PropertySidebar property={property} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
