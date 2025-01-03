/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { Input } from "../UI/input";
import { Label } from "../UI/label";
import { Link, useNavigate } from "react-router";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import IRegsiterType from "@/types/registerType";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../UI/tooltip";
import { useRegisterUserMutation } from "@/redux/User/userApi";
import IErrorResponseType from "@/types/errorResponseType";
import { toast } from "sonner";
const Register = () => {
  const { register, handleSubmit, reset } = useForm<IRegsiterType>();
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();

  const handleRegister = async (data: IRegsiterType) => {
    try {
      if (data.password.length < 8) {
        console.log("The password field must be at least 8 characters.");
        return;
      }
      const res = await registerUser(data);
      if (!res?.data?.status) {
        toast("Something went wrong ! Kindly try again");
        return;
      } else {
        toast(res?.data?.status_message);
        navigate("/login");
      }
    } catch (error: unknown) {
      const errorResponse = error as IErrorResponseType;
      if (errorResponse?.message) {
        console.log(errorResponse?.message);
      } else {
        console.error("Unexpected error: ", error);
      }
    }
    reset();
  };
  return (
    <div className="lg:w-1/2   md:w-4/5 px-10 lg:px-0 mx-auto bg-purple-700 text-white font-bold">
      <h1 className="text-center lg:text-5xl text-4xl pt-5">Register Now !</h1>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="flex items-center justify-center mt-10 flex-col gap-5"
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name" className="text-lg">
            Name
          </Label>
          <Input
            type="name"
            className="text-purple-600 py-6"
            id="name"
            placeholder="Enter Your Name"
            required
            {...register("name")}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email" className="text-lg">
            Email
          </Label>
          <Input
            type="email"
            className="text-purple-600 py-6"
            id="email"
            placeholder="Enter Your Email"
            required
            {...register("email")}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password" className="text-lg">
            Password
          </Label>
          <Input
            type="password"
            className="text-purple-600 py-6"
            id="password"
            placeholder="Enter Your Password"
            required
            {...register("password")}
          />
        </div>
        <div>
          <button
            type="submit"
            className="b px-5 py-2 hover:scale-105 text-white bg-purple-600 border-2 border-white"
          >
            Register
          </button>
        </div>
      </form>
      <div>
        <div className="text-sm">
          <h1 className="text-center pt-5 ">
            Already an user ?
            <span className="underline   text-white cursor-pointer px-2 py-1 ">
              <Link to={"/login"}> Login Now ! </Link>{" "}
            </span>
          </h1>
        </div>
        <div className="flex justify-center items-center mt-12 mb-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to={"/"}>
                  <button className="text-5xl hover:scale-110">
                    <IoArrowBackCircleSharp />
                  </button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Go Back To Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default Register;
