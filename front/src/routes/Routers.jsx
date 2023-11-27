import { Routes, Route } from "react-router-dom";
import AlumnoPage from "../pages/AlumnoPage.jsx";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<AlumnoPage />} />
    </Routes>
  );
}
export default Routers;
