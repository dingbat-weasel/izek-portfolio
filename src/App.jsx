import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import CV from "./pages/cv/CV";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="cv" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
