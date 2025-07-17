import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpointUrl } from "../../../../../serverUrl";

export const propertySlice = createApi({
  reducerPath: "propertyApi",
  baseQuery: fetchBaseQuery({ baseUrl: endpointUrl }),
  tagTypes: ["Properties"],
  endpoints: (builder) => ({
    getAllProperties: builder.query({
      query: () => ({
        url: "/landlord/all-landlords/",
        method: "GET",
      }),
      providesTags: ["Properties"],
    }),
  }),
});
export const { useGetAllPropertiesQuery } = propertySlice;
export default propertySlice;