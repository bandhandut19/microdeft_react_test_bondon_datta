import { useForm } from "react-hook-form";
import CustomTitle from "../UI/CustomTitle";
import { Input } from "../UI/input";
import { Label } from "../UI/label";
import ICourseInfo from "@/types/addCourseType";
import { toast } from "sonner";
import { useAddCourseMutation } from "@/redux/Course/courseApi";
import IErrorResponseType from "@/types/errorResponseType";

const AddCourses = () => {
  const { handleSubmit, register, reset } = useForm<ICourseInfo>();
  const [addCourse] = useAddCourseMutation();
  const handleAddCourse = async (data: ICourseInfo) => {
    try {
      const res = await addCourse(data);
      console.log(res);
      if (!res?.data?.status) {
        toast("Provided credentials are incorrect");
        return;
      } else {
        toast(res?.data?.status_message);
        reset();
      }
    } catch (error: unknown) {
      const errorResponse = error as IErrorResponseType;
      if (errorResponse?.message) {
        console.log(errorResponse?.message);
      } else {
        console.error("Unexpected error: ", error);
      }
    }
    console.log(data);
  };
  return (
    <div className="min-h-screen">
      <CustomTitle title="Add Courses"></CustomTitle>
      <form
        onSubmit={handleSubmit(handleAddCourse)}
        className="grid lg:grid-cols-2 grid-cols-1 mx-auto mt-10 w-4/5 items-center justify-center lg:gap-10 gap-5"
      >
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title" className="text-lg">
            Course Title
          </Label>
          <Input
            type="title"
            className="text-purple-600 font-bold py-6 bg-purple-300 placeholder:text-purple-600 placeholder:font-normal"
            id="title"
            placeholder="Enter Course title"
            required
            {...register("title")}
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="description" className="text-lg">
            Course Description
          </Label>
          <Input
            type="description"
            className="text-purple-600 font-bold py-6 bg-purple-300 placeholder:text-purple-600 placeholder:font-normal"
            id="description"
            placeholder="Enter Course description"
            required
            {...register("description")}
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="badge_text" className="text-lg">
            Badge Text
          </Label>
          <Input
            type="badge_text"
            className="text-purple-600 font-bold py-6 bg-purple-300 placeholder:text-purple-600 placeholder:font-normal"
            id="badge_text"
            placeholder="Enter Badge Text"
            required
            {...register("badge_text")}
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="badge_color" className="text-lg">
            Badge Color
          </Label>
          <Input
            type="badge_color"
            className="text-purple-600 font-bold py-6 bg-purple-300 placeholder:text-purple-600 placeholder:font-normal"
            id="badge_color"
            placeholder="Enter Badge Color"
            required
            {...register("badge_color")}
          />
        </div>
        <div className="grid w-full  items-center gap-1.5">
          <Label htmlFor="instructor_name" className="text-lg">
            Course Instructor Name
          </Label>
          <Input
            type="instructor_name"
            className="text-purple-600 font-bold py-6 bg-purple-300 placeholder:text-purple-600 placeholder:font-normal"
            id="instructor_name"
            placeholder="Enter Course Instructor Name"
            required
            {...register("instructor_name")}
          />
        </div>
        <div></div>
        <div className="lg:col-span-2 text-center transition-colors duration-700 text-white lg:text-lg md:text-lg text-lg font-bold bg-purple-600 lg:px-3 lg:py-2 p-1 hover:bg-purple-400 hover:text-black ">
          <button type="submit" className="">
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourses;
