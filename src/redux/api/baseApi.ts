import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://react-interview.crd4lc.easypanel.host/api",
    // credentials: "include",
  }),
  tagTypes: ["allcourses"],
  endpoints: () => ({}),
});
