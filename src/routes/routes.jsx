import { Route } from "react-router-dom";
import { SimpleDashboard } from "../pages/SimpleDashboard/SimpleDashboard";
import { Home } from "../pages/Home/Home";
import { EyfsDashboard } from "../pages/EyfsDashboard/EyfsDashboard";
import { DetailedDashboard } from "../pages/DetailedDashboard/DetailedDashboard";
import { CreateDashboard } from "../pages/CreateDashboard/CreateDashboard";
import { CreateLesson } from "../pages/CreateLesson/CreateLesson";
import { LiteracyDashboard } from "../pages/LiteracyDashboard/LiteracyDashboard";
import { MathsDashboard } from "../pages/MathsDashboard/MathsDashboard";
import { HighDashboard } from "../pages/HighDashboard/HighDashboard";
import { ScienceDashboard } from "../pages/ScienceDashboard/ScienceDashboard";
import { ResearchPrompts } from "../pages/ResearchPrompts/ResearchPrompts";
import Test from "../components/newtest/Test";
import { Board } from "../components/newtest/Board";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/SimpleDashboard" element={<SimpleDashboard />} />
    <Route path="/EyfsDashboard" element={<EyfsDashboard />} />
    <Route path="/DetailedDashboard" element={<DetailedDashboard />} />
    <Route path="/HighDashboard" element={<HighDashboard />} />
    <Route path="/CreateDashboard" element={<CreateDashboard />} />
    <Route path="/CreateLesson" element={<CreateLesson />} />
    <Route path="/LiteracyDashboard" element={<LiteracyDashboard />} />
    <Route path="/MathsDashboard" element={<MathsDashboard />} />
    <Route path="/ScienceDashboard" element={<ScienceDashboard />} />
    <Route path="/ResearchPrompts" element={<ResearchPrompts />} />
    <Route path="/DragandDrop" element={<Board />} />
  </>
);

export default routes;
