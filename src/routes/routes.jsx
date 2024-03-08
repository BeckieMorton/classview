import { Route } from "react-router-dom";
import { SimpleDashboard } from "../pages/SimpleDashboard";
import { Home } from "../pages/Home";
import { EyfsDashboard } from "../pages/EYFSDashboard";
import { DetailedDashboard } from "../pages/DetailedDashboard";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/SimpleDashboard" element={<SimpleDashboard />} />
    <Route path="/EyfsDashboard" element={<EyfsDashboard />} />
    <Route path="/DetailedDashboard" element={<DetailedDashboard />} />
  </>
);

export default routes;
