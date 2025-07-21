import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpointUrl } from "../../../../../serverUrl";

export const getPropertySpecificDetailsSlice = createApi({
  reducerPath: "propertySpecificDetailsApi",
  baseQuery: fetchBaseQuery({ baseUrl: endpointUrl }),
  tagTypes: ["Properties"],
  endpoints: (builder) => ({
    getPropertySpecificDetails: builder.query({
      query: (property_id) => ({
        url: `/landlord/alliance-specific-apartment?property_id=${property_id}`,
        method: "GET",
      }),
      providesTags: ["Properties"],
    }),
  }),
});
export const { useGetPropertySpecificDetailsQuery } =
  getPropertySpecificDetailsSlice;
export default getPropertySpecificDetailsSlice;
