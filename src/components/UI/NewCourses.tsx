/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetAllCoursesQuery } from "@/redux/Course/courseApi";
import ICourseInfo from "@/types/addCourseType";
import { FaAddressBook } from "react-icons/fa";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const NewCourses = () => {
  const colorMap: Record<string, string> = {
    red: "bg-red-600",
    blue: "bg-blue-600",
    green: "bg-green-600",
    yellow: "bg-yellow-600",
    Yellow: "bg-yellow-600",
  };
  const userDetails = useAppSelector(
    (state: RootState) => state.user.userDetails
  );
  const { data } = useGetAllCoursesQuery({});
  const courseData = data?.data?.data;
  const NewCourses = courseData?.filter(
    (course: ICourseInfo) => course?.badge_text === "New"
  );
  return (
    <div className="mt-10">
      <h1 className="text-center text-4xl font-bold py-2 text-white bg-purple-600">
        New Courses
      </h1>
      {userDetails?.email ? (
        <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 ">
          {NewCourses?.map((course: ICourseInfo) => (
            <div
              key={course.id}
              className="card bg-purple-200 shadow-xl hover:scale-105"
            >
              <img src={course.image} alt="course-image" />
              <div className="card-body">
                <h2 className="card-title">
                  {course.title}
                  <div
                    className={`badge ${
                      colorMap[course?.badge_color || "blue"]
                    } text-white`}
                  >
                    {course.badge_text}
                  </div>
                </h2>
                <p>{course.description}</p>
                <div>
                  <div>
                    <h1>
                      <span className="text-purple-700 font-extrabold flex items-center gap-2">
                        <FaAddressBook /> Instructor:
                        <span className="font-bold text-purple-600">
                          {course.instructor_name}
                        </span>
                      </span>{" "}
                    </h1>
                  </div>
                </div>
              </div>
              <div className=" card-actions justify-center bg-purple-600 text-white text-lg font-bold py-3 hover:bg-purple-300 hover:text-black border-2 cursor-pointer hover:border-purple-600 hover:transition-colors hover:duration-700">
                <button className="text-center">
                  <h1 className="text-center">View Details</h1>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-center text-xl font-bold mt-10">Login to view</h1>
      )}
    </div>
  );
};

export default NewCourses;
