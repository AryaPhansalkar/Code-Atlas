import { FC } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Landing from "../Pages/Landing";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Dashboard from "../components/Dashboard";

import Experiments from "../Pages/Experiments";
import ExperimentPage from "../Pages/ExperimentPage";
import Compiler from "../Pages/Compiler";

const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ================= MAIN APP ================= */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* ================= DSA FLOW (IMPORTANT) ================= */}
        
        {/* List of problems/topics */}
        <Route path="/experiments" element={<Experiments />} />

        {/* Problem description page (LeetCode-style) */}
        <Route path="/experiment/:id" element={<ExperimentPage />} />

        {/* Compiler MUST always receive problem id */}
        <Route path="/compiler/:id" element={<Compiler />} />

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;