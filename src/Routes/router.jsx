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
import Common from "../pages/Dashbord/Common/Common";
import AddScholarship from "../pages/Dashbord/Moderator/AddScholarship";
import ManageScholarships from "../pages/Dashbord/Moderator/ManageScholarships";
import MyApplication from "../pages/Dashbord/User/MyApplication";
import AllAppliedScholarship from "../pages/Dashbord/Moderator/AllAppliedScholarship";
import ApplyForm from "../pages/Dashbord/User/ApplyForm";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AMRoute from "./AMRoute";

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
        element: (
          <PrivateRoute>
            <AllScholarship></AllScholarship>
          </PrivateRoute>
        ),
      },
      {
        path: "/university/:id",
        element: (
          <PrivateRoute>
            <ScholarshipDetails></ScholarshipDetails>
          </PrivateRoute>
        ),
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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Common></Common>,
      },
      {
        path: "add-scholarship",
        element: (
          <PrivateRoute>
            <AMRoute>
              <AddScholarship></AddScholarship>
            </AMRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-scholarships",
        element: (
          <PrivateRoute>
            <AMRoute>
              <ManageScholarships></ManageScholarships>
            </AMRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-application",
        element: (
          <PrivateRoute>
            <MyApplication></MyApplication>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-applied-scholarship",
        element: (
          <PrivateRoute>
            <AMRoute>
              <AllAppliedScholarship></AllAppliedScholarship>
            </AMRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "apply-form",
        element: (
          <PrivateRoute>
            <ApplyForm></ApplyForm>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
