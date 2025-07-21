import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpointUrl } from "../../../../../serverUrl";

export const getBlogsSlice = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: endpointUrl }),
  tagTypes: ["Blogs"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: "/landlord/alliance-blog-image-user",
        method: "GET",
      }),
      providesTags: ["Blogs"],
    }),
  }),
});
export const { useGetBlogsQuery } = getBlogsSlice;
export default getBlogsSlice;
