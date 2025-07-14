import { Suspense } from "react";
import PropertyClient from "./_propertyClient";

export default function CitiesListingPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <PropertyClient />
    </Suspense>
  );
}
