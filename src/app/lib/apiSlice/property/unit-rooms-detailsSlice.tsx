import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpointUrl } from "../../../../../serverUrl";

export const getUnitRoomsDetailsSlice = createApi({
  reducerPath: "unitRoomsDetailsApi",
  baseQuery: fetchBaseQuery({ baseUrl: endpointUrl }),
  tagTypes: ["Properties"],
  endpoints: (builder) => ({
    getUnitRoomsDetails: builder.query({
      query: (house_id) => ({
        url: `/landlord/alliance-unit-rooms-allow?house_id=${house_id}`,
        method: "GET",
      }),
      providesTags: ["Properties"],
    }),
  }),
});
export const { useGetUnitRoomsDetailsQuery } = getUnitRoomsDetailsSlice;
export default getUnitRoomsDetailsSlice;
//slice for fetching unit room details 