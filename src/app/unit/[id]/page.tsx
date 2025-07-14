import UnitClient from "./_unitClient";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export default function UnitDetailPage({ params }: { params: { id: string } }) {
  const propertyId = params.id;

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

  return <UnitClient property={property} />;
}
