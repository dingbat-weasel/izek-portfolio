import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import AppLayout from "./ui/AppLayout";
import CV from "./pages/CV";
import Home from "./pages/Home";
import Algorithms from "./pages/Algorithms";
import Palimpsest from "./pages/Palimpsest";
import PageNotFound from "./pages/PageNotFound";
import ErrorPage from "./pages/ErrorPage";
import LeetcodeNav from "./features/algorithms/leetcode/LeetcodeNav";
import TwoSum from "./features/algorithms/leetcode/problems/TwoSum";

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
      },
      {
        path: "/algorithms/leetcode/two_sum",
        element: <TwoSum />,
      },
      {
        path: "/palimpsest",
        element: <Palimpsest />,
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
