import { baseApi } from "../api/baseApi";
const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userRegistrationData) => ({
        url: "/register",
        method: "POST",
        body: userRegistrationData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    loginUser: builder.mutation({
      query: (userloginData) => ({
        url: "/login",
        method: "POST",
        body: userloginData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = userApi;
