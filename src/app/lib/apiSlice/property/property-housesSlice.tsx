import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpointUrl } from "../../../../../serverUrl";

export const getPropertyHousesSlice = createApi({
  reducerPath: "propertyHousesApi",
  baseQuery: fetchBaseQuery({ baseUrl: endpointUrl }),
  tagTypes: ["Properties"],
  endpoints: (builder) => ({
    getPropertyHouses: builder.query({
      query: (property_id) => ({
        url: `/landlord/alliance-house?property_id=${property_id}`,
        method: "GET",
      }),
      providesTags: ["Properties"],
    }),
  }),
});
export const { useGetPropertyHousesQuery } = getPropertyHousesSlice;
export default getPropertyHousesSlice;
