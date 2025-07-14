"use client";

import { useRouter } from "next/navigation";
import { PropertyHeader } from "@/components/property/property-header";
import { PropertyImageGallery } from "@/components/property/property-image-gallery";
import { PropertyContent } from "@/components/property/property-content";
import { PropertySidebar } from "@/components/property/property-sidebar";
import { PropertyTitleSection } from "@/components/property/property-title-section";
import { PropertyActionButtons } from "@/components/property/property-action-buttons";
import { Footer } from "@/components/footer";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export default function UnitDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const propertyId = params.id;

  // Static mock data based on ID
  const property = {
    id: propertyId,
    title: `${propertyId}, Johari Apartments`,
    location: "Ukunda, Kwale County, Kenya",
    price: "Ksh.20,000",
    period: "/month",
    type: "Mansionette",
    bedrooms: 3,
    bathrooms: 3,
    rating: 3.6,
    reviewCount: 2,
    datePosted: "10/02/2023",
    listingType: "FOR RENT",
    pastTenants: 2,
    images: [
      `https://kodinyumba.app/media/Stock/House/house0.jpg`,
      `https://kodinyumba.app/media/Stock/House/house1.jpg`,
      `https://kodinyumba.app/media/Stock/House/house2.jpg`,
      `https://kodinyumba.app/media/Stock/House/house3.jpg`,
      `https://kodinyumba.app/media/Stock/House/house4.jpg`,
      `https://kodinyumba.app/media/Stock/House/house5.jpg`,
    ],
    description:
      "Nestled in the heart of the enchanting beautiful coastal town of Ukunda in Mombasa, Kenya.....",
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
