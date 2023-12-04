import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import AppLayout from "./ui/AppLayout";
import CV from "./pages/CV";
import Algorithms from "./pages/Algorithms";
import Palimpsest from "./pages/Palimpsest";

import ErrorPage from "./pages/ErrorPage";
import PageNotFound from "./pages/PageNotFound";
import LeetcodeNav from "./features/algorithms/leetcode/LeetcodeNav";
import TwoSum from "./features/algorithms/leetcode/problems/TwoSum";
import Post from "./features/palimpsest/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/algorithms",
        element: <Algorithms />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/algorithms/leetcode",
        element: <LeetcodeNav />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/algorithms/leetcode/two_sum",
        element: <TwoSum />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/palimpsest",
        element: <Palimpsest />,
        errorElement: <PageNotFound />,
        children: [
          {
            path: "post/:postId",
            element: <Post />,

            errorElement: <PageNotFound />,
          },
        ],
      },
    ],
  },
  {
    path: "/cv",
    element: <CV />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
