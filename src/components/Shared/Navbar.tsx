import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../../public/microdeft_logo.png";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { removeLoggedUserToken } from "@/redux/User/userSlice";
import { toast } from "sonner";
const Navbar = () => {
  const userToken = useAppSelector((state: RootState) => state.user.token);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(removeLoggedUserToken());
    toast("Logged Out Successfully");
    navigate("/");
  };
  return (
    <div className="navbar bg-purple-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-purple-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-purple-200 rounded border-2 border-white z-[1] w-32 shadow"
          >
            <li className="text-purple-600 font-bold text-lg">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `nav-link hover:bg-[#D7DFA3] hover:scale-110 duration-300 dark:text-black rounded-none text-sm  hover:text-[#1A4862] ${
                    isActive ? "nav-link-active" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-purple-600 font-bold text-lg">
              <NavLink
                to={"/all-courses"}
                className={({ isActive }) =>
                  `nav-link hover:bg-[#D7DFA3] hover:scale-110 duration-300 dark:text-black rounded-none text-sm  hover:text-[#1A4862] ${
                    isActive ? "nav-link-active" : ""
                  }`
                }
              >
                All Courses
              </NavLink>
            </li>
            <li className="text-purple-600 font-bold text-lg">
              <NavLink
                to={"/add-courses"}
                className={({ isActive }) =>
                  `nav-link hover:bg-[#D7DFA3] hover:scale-110 duration-300 dark:text-black rounded-none text-sm  hover:text-[#1A4862] ${
                    isActive ? "nav-link-active" : ""
                  }`
                }
              >
                Add Courses
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <img src={logo} alt="logo" className="lg:w-40 w-20 md:w-36" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5">
          <li className="text-purple-600 font-bold text-lg">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `nav-link hover:bg-purple-600 hover:scale-110 duration-300 dark:text-black rounded-none text-xl  hover:text-white ${
                  isActive ? "nav-link-active" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-purple-600 font-bold text-lg">
            <NavLink
              to={"/all-courses"}
              className={({ isActive }) =>
                `nav-link hover:bg-purple-600 hover:scale-110 duration-300 dark:text-black rounded-none text-xl  hover:text-white ${
                  isActive ? "nav-link-active" : ""
                }`
              }
            >
              All Courses
            </NavLink>
          </li>
          <li className="text-purple-600 font-bold text-lg">
            <NavLink
              to={"/add-courses"}
              className={({ isActive }) =>
                `nav-link hover:bg-purple-600 hover:scale-110 duration-300 dark:text-black rounded-none text-xl  hover:text-white ${
                  isActive ? "nav-link-active" : ""
                }`
              }
            >
              Add Courses
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end text-white lg:text-lg md:text-lg text-sm font-bold flex gap-2">
        <div>
          {userToken ? (
            <button
              onClick={handleLogout}
              className="bg-purple-600 lg:px-3 lg:py-2 p-1 hover:bg-purple-400 hover:text-black "
            >
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="bg-purple-600 lg:px-3 lg:py-2 p-1 hover:bg-purple-400 hover:text-black ">
                Login
              </button>
            </Link>
          )}
        </div>
        <div>
          {userToken ? (
            ""
          ) : (
            <Link to={"/register"}>
              <button className="bg-purple-600 lg:px-3 lg:py-2 p-1 hover:bg-purple-400 hover:text-black">
                Register Now!
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
