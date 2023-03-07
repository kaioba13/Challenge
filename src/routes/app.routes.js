import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import Content from "../Pages/Content";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Details/:id" element={<Details />} />
      <Route path="/Details/:id/:idContent" element={<Content />} />
    </Routes>
  );
}
