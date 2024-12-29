import PrimaryLayout from "@/components/Layouts/PrimaryLayout";
import SecondaryLayout from "@/components/Layouts/SecondaryLayout";
import ErrorPage from "@/components/Pages/ErrorPage";
import Home from "@/components/Pages/Home";
import Login from "@/components/Pages/Login";
import Register from "@/components/Pages/Register";
import { createBrowserRouter } from "react-router";
import PrivateRoute from "./PrivateRoute";
import Courses from "@/components/Pages/Courses";
import AddCourses from "@/components/Pages/AddCourses";

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
            <Courses></Courses>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-courses",
        element: (
          <PrivateRoute>
            <AddCourses></AddCourses>
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
