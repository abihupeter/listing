import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpointUrl } from "../../../../../serverUrl";

export const filterPropertiesByPriceSlice = createApi({
  reducerPath: "filterPropertiesByPriceApi",
  baseQuery: fetchBaseQuery({ baseUrl: endpointUrl }),
  tagTypes: ["Properties"],
  endpoints: (builder) => ({
    filterPropertiesByPrice: builder.query({
      query: ({ min_price_range, max_price_range }) => {
        let url = `/landlord/alliance-unit-search?min_price_range=${min_price_range}`;
        if (max_price_range) {
          url += `&max_price_range=${max_price_range}`;
        }
        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["Properties"],
    }),
  }),
});
export const { useFilterPropertiesByPriceQuery } = filterPropertiesByPriceSlice;
export default filterPropertiesByPriceSlice;
