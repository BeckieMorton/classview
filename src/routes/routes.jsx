import { Route } from "react-router-dom";
import { SimpleDashboard } from "../pages/SimpleDashboard/SimpleDashboard";
import { Home } from "../pages/Home/Home";
import { EyfsDashboard } from "../pages/EyfsDashboard/EyfsDashboard";
import { DetailedDashboard } from "../pages/DetailedDashboard/DetailedDashboard";
import { CreateDashboard } from "../pages/CreateDashboard/CreateDashboard";
import { CreateLesson } from "../pages/CreateLesson/CreateLesson";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/SimpleDashboard" element={<SimpleDashboard />} />
    <Route path="/EyfsDashboard" element={<EyfsDashboard />} />
    <Route path="/DetailedDashboard" element={<DetailedDashboard />} />
    <Route path="/CreateDashboard" element={<CreateDashboard />} />
    <Route path="/CreateLesson" element={<CreateLesson />} />
  </>
);

export default routes;
