import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import CV from "./pages/CV";
import Home from "./pages/Home";
import Algorithms from "./pages/Algorithms";
import Palimpsest from "./pages/Palimpsest";
import PageNotFound from "./pages/PageNotFound";

import LeetcodeNav from "./features/algorithms/leetcode/LeetcodeNav";
import LeetcodeProblem from "./features/algorithms/leetcode/LeetcodeProblem";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/algorithms",
      element: <Algorithms />,
    },
    {
      path: "/cv",
      element: <CV />,
    },
  ]);

  return;

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route index element={<Navigate replace to="/" />} />
  //       <Route element={<AppLayout />}>
  //         <Route path="home" element={<Home />} />

  //         <Route path="algorithms" element={<Algorithms />} />

  //         <Route path="/algorithms/leetcode" element={<LeetcodeNav />} />
  //         <Route
  //           path="algorithms/leetcode/:leetcodeId"
  //           element={<LeetcodeProblem />}
  //         />

  //         <Route path="palimpsest" element={<Palimpsest />} />
  //       </Route>
  //       <Route path="cv" element={<CV />} />
  //       <Route path="*" element={<PageNotFound />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
