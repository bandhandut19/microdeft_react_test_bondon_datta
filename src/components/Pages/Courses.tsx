/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetAllCoursesQuery } from "@/redux/Course/courseApi";
import { useState } from "react";
import CustomTitle from "../UI/CustomTitle";

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
      <CustomTitle title="All Courses"></CustomTitle>
    </div>
  );
};

export default Courses;
