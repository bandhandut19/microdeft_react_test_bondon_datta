import Cookies from "js-cookie";
import { baseApi } from "../api/baseApi";

const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: (params) => {
        const userToken = Cookies.get("UserTokenMC");
        console.log(userToken);
        return {
          url: "/course",
          method: "GET",
          params,
          headers: {
            Authorization: userToken ? `Bearer ${userToken}` : "",
            "Content-Type": "application/json",
          },
        };
      },
      providesTags: [{ type: "allcourses", id: "DETAILS" }],
    }),
  }),
});

export const { useGetAllCoursesQuery } = courseApi;
export default courseApi;
