import { useForm } from "react-hook-form";
import { Input } from "../UI/input";
import { Label } from "../UI/label";
import { Link, useNavigate } from "react-router";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useLoginUserMutation } from "@/redux/User/userApi";
import { toast } from "sonner";
import IErrorResponseType from "@/types/errorResponseType";
import { IloginType, IStoredUserData } from "@/types/loginType";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../UI/tooltip";
import { useAppDispatch } from "@/redux/hooks";
import { addLoggedUserToken } from "@/redux/User/userSlice";
const Login = () => {
  const { register, handleSubmit, reset } = useForm<IloginType>();
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogin = async (data: IloginType) => {
    try {
      console.log(data);
      if (data.password.length < 8) {
        console.log("The password field must be at least 8 characters.");
        return;
      }
      const res = await loginUser(data);
      console.log(res);
      if (!res?.data?.status) {
        toast("Provided credentials are incorrect");
        return;
      } else {
        toast(res?.data?.status_message);
        const userData: IStoredUserData = {
          token: res?.data?.data?.token,
          userDetails: {
            id: res?.data?.data?.user?.id,
            name: res?.data?.data?.user?.name,
            email: res?.data?.data?.user?.email,
          },
        };
        dispatch(addLoggedUserToken(userData));
        navigate("/");
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
      <h1 className="text-center lg:text-5xl text-4xl pt-5">Login Now !</h1>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex items-center justify-center mt-10 flex-col gap-5"
      >
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
            Login
          </button>
        </div>
      </form>
      <div>
        <div className="text-sm">
          <h1 className="text-center pt-5 ">
            Not an user ?
            <span className="underline  text-white cursor-pointer px-2 py-1 ">
              <Link to={"/register"}> Register Now ! </Link>{" "}
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

export default Login;
