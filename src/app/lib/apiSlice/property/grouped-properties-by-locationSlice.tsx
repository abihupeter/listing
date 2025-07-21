import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpointUrl } from "../../../../../serverUrl";

export const getGroupedPropertiesByLocationSlice = createApi({
  reducerPath: "groupedPropertiesByLocationApi",
  baseQuery: fetchBaseQuery({ baseUrl: endpointUrl }),
  tagTypes: ["Properties"],
  endpoints: (builder) => ({
    getGroupedPropertiesByLocation: builder.query({
      query: () => ({
        url: "/landlord/alliance-county-properties",
        method: "GET",
      }),
      providesTags: ["Properties"],
    }),
  }),
});
export const { useGetGroupedPropertiesByLocationQuery } =
  getGroupedPropertiesByLocationSlice;
export default getGroupedPropertiesByLocationSlice;
