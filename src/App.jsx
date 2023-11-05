import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import CV from "./pages/CV";
import Home from "./pages/Home";
import Algorithms from "./pages/Algorithms";
import Palimpsest from "./pages/Palimpsest";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="sandbox" />} />
        <Route element={<AppLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="algorithms" element={<Algorithms />} />
          <Route path="palimpsest" element={<Palimpsest />} />
        </Route>
        <Route path="cv" element={<CV />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
