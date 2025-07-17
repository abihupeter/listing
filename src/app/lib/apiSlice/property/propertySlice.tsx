import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpointUrl } from "../../../../../serverUrl";

export const propertySlice = createApi({
  reducerPath: "propertyApi",
 baseQuery: fetchBaseQuery({ baseUrl: endpointUrl }),
  tagTypes: ["Property"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (clientData) => ({
        url: "/users/login/",
        method: "POST",
        body: clientData,
      }),
      invalidatesTags: ["Property"],
    }),
    getAllProperties: builder.query({
      query: () => `/landlord/apartment`,
      providesTags: ["Property"],
    }),
  }),
});
export const { useLoginUserMutation, useGetAllPropertiesQuery } =
  propertySlice;
export default propertySlice;
