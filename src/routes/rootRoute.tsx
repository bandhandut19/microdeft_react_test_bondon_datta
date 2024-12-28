import PrimaryLayout from "@/components/Layouts/PrimaryLayout";
import SecondaryLayout from "@/components/Layouts/SecondaryLayout";
import ErrorPage from "@/components/Pages/ErrorPage";
import Home from "@/components/Pages/Home";
import Login from "@/components/Pages/Login";
import Register from "@/components/Pages/Register";
import { createBrowserRouter } from "react-router";
import AllCourses from "../components/Pages/AllCourses";
import PrivateRoute from "./PrivateRoute";

const rootRoute = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout></PrimaryLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-courses",
        element: (
          <PrivateRoute>
            <AllCourses></AllCourses>,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <SecondaryLayout></SecondaryLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default rootRoute;
