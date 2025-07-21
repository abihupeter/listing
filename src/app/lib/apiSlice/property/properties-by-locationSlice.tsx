import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpointUrl } from "../../../../../serverUrl";

export const getPropertiesByLocationSlice = createApi({
  reducerPath: "propertiesByLocationApi",
  baseQuery: fetchBaseQuery({ baseUrl: endpointUrl }),
  tagTypes: ["Properties"],
  endpoints: (builder) => ({
    getPropertiesByLocation: builder.query({
      query: (location) => ({
        url: `/landlord/alliance-county-location?location=${location}`,
        method: "GET",
      }),
      providesTags: ["Properties"],
    }),
  }),
});
export const { useGetPropertiesByLocationQuery } = getPropertiesByLocationSlice;
export default getPropertiesByLocationSlice;
