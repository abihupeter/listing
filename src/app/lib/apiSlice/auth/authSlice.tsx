import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpointUrl } from "../../../../../serverUrl";

export const authSlice = createApi({
  reducerPath: "authApi",
 baseQuery: fetchBaseQuery({ baseUrl: endpointUrl }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (clientData) => ({
        url: "/user/login/",
        method: "POST",
        body: clientData,
      }),
      invalidatesTags: ["Auth"],
    }),
    registerUser: builder.mutation({
      query: (clientData) => ({
        url: "/user/register/",
        method: "POST",
        body: clientData,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});
export const { useLoginUserMutation, useRegisterUserMutation } =
  authSlice;
export default authSlice;
