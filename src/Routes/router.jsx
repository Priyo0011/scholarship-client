import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllScholarship from "../components/Scholarship/AllScholarship";
import ScholarshipDetails from "../components/Scholarship/ScholarshipDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../pages/Dashbord/Common/Profile";
import ManageUsers from "../pages/Dashbord/Admin/ManageUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-scholarship",
        element: <AllScholarship></AllScholarship>,
      },
      {
        path: "/university/:id",
        element: <ScholarshipDetails></ScholarshipDetails>,
      },
      
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: '/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children:[
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>,
      },
    ],
  },
]);
