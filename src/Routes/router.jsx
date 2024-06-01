import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllScholarship from "../components/Scholarship/AllScholarship";

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
    ],
  },
]);
