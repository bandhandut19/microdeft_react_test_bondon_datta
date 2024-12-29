/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetAllCoursesQuery } from "@/redux/Course/courseApi";
import { useState } from "react";

const Courses = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, error, isLoading } = useGetAllCoursesQuery({
    params: currentPage,
  });
  if (error) {
    console.log(error);
  }
  console.log(data);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-5 text-purple-600">
        All courses
      </h1>
    </div>
  );
};

export default Courses;
