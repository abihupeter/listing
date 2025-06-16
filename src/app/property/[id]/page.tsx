"use client";

import { useParams, useRouter } from "next/navigation";
import { PropertyHeader } from "@/components/property/property-header";
import { PropertyImageGallery } from "@/components/property/property-image-gallery";
import { PropertyContent } from "@/components/property/property-content";
import { PropertySidebar } from "@/components/property/property-sidebar";
import { PropertyTitleSection } from "@/components/property/property-title-section";
import { PropertyActionButtons } from "@/components/property/property-action-buttons";
import { Footer } from "@/components/footer";

export default function PropertyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const propertyId = params.id;

  // Mock property data
  const property = {
    id: propertyId,
    title: `${propertyId}, Johari apartments`,
    location: "Ukunda, Kwale County, Kenya",
    price: "Ksh.20,000",
    period: "/month",
    type: "Mansionette",
    bedrooms: 2,
    bathrooms: 3,
    rating: 3.6,
    reviewCount: 2,
    datePosted: "10/02/2023",
    listingType: "FOR RENT",
    pastTenants: 2,
    images: [
      "/placeholder.svg?height=400&width=600&text=Modern+Living+Room",
      "/placeholder.svg?height=300&width=400&text=Luxury+Kitchen",
      "/placeholder.svg?height=300&width=400&text=Outdoor+Bathroom",
      "/placeholder.svg?height=300&width=400&text=Modern+Bedroom",
      "/placeholder.svg?height=300&width=400&text=Dining+Area",
    ],
    description:
      "Nestled in the heart of the enchanting coastal town of Ukunda in Mombasa, Kenya...",
  };

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