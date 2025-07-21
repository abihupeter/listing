import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpointUrl } from "../../../../../serverUrl";

export const getUnitSpecificDetailsSlice = createApi({
  reducerPath: "unitSpecificDetailsApi",
  baseQuery: fetchBaseQuery({ baseUrl: endpointUrl }),
  tagTypes: ["Properties"],
  endpoints: (builder) => ({
    getUnitSpecificDetails: builder.query({
      query: (unit_id) => ({
        url: `/landlord/alliance-specific-house?unit_id=${unit_id}`,
        method: "GET",
      }),
      providesTags: ["Properties"],
    }),
  }),
});
export const { useGetUnitSpecificDetailsQuery } = getUnitSpecificDetailsSlice;
export default getUnitSpecificDetailsSlice;
