import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../components/Home/Home";
import NoPageFound from "../components/NoPageFound/NoPageFound";
import Courses from "../components/Courses/Courses";

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
          return fetch("courses.json");
        },
        element: <Courses />,
      },
      {
        path: "*",
        element: <NoPageFound />,
      },
    ],
  },
]);
