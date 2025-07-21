import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpointUrl } from "../../../../../serverUrl";

export const getPropertyNearbyFacilitiesSlice = createApi({
  reducerPath: "propertyNearbyFacilitiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: endpointUrl }),
  tagTypes: ["Properties"],
  endpoints: (builder) => ({
    getPropertyNearbyFacilities: builder.query({
      query: (apartment_id) => ({
        url: `/landlord/alliance-facilities-apartment-allowany?apartment_id=${apartment_id}`,
        method: "GET",
      }),
      providesTags: ["Properties"],
    }),
  }),
});
export const { useGetPropertyNearbyFacilitiesQuery } =
  getPropertyNearbyFacilitiesSlice;
export default getPropertyNearbyFacilitiesSlice;
