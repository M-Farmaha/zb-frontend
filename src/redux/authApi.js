import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://react-node-training.onrender.com",
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    logoutUser: builder.mutation({
      query: (token) => ({
        url: "/logout",
        method: "POST",
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApi;
