import Cookies from "js-cookie";
import { baseApi } from "../api/baseApi";
import ICourseInfo from "@/types/addCourseType";

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
    addCourse: builder.mutation({
      query: (courseInfo: ICourseInfo) => {
        const userToken = Cookies.get("UserTokenMC");
        return {
          url: "/course",
          method: "POST",
          body: courseInfo,
          headers: {
            Authorization: userToken ? `Bearer ${userToken}` : "",
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: [{ type: "allcourses", id: "DETAILS" }],
    }),
  }),
});

export const { useGetAllCoursesQuery, useAddCourseMutation } = courseApi;
export default courseApi;
