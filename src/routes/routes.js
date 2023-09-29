import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../components/Home/Home";
import NoPageFound from "../components/NoPageFound/NoPageFound";
import Courses from "../components/Courses/Courses";
import SingleCourse from "../components/SingleCourse/SingleCourse";
import ConfirmPurchase from "../components/ConfirmPurchase/ConfirmPurchase";
import Login from "../components/Login/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "courses",
        loader: async () => {
          return fetch("http://localhost:5000/");
        },
        element: <Courses />,
      },
      {
        path: "*",
        element: <NoPageFound />,
      },
      {
        path: "courses/course/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/${params.id}`);
        },
        element: <SingleCourse />,
      },
      {
        path: "courses/course/:id/purchase",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/${params.id}`);
        },
        element: <ConfirmPurchase />,
      },
      {
        path: "register",
        element: <Login name="register" />,
      },
      {
        path: "login",
        element: <Login name="login" />,
      },
    ],
  },
]);
