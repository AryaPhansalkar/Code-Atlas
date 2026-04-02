import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Compiler from "./Pages/Compiler";
import Dashboard from "./components/Dashboard";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ExperimentPage from "./Pages/ExperimentPage";
import Experiments  from "./Pages/Experiments";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/compiler" element={<Compiler/>} />

        <Route path="/experiment/:id" element={<ExperimentPage />} />
         <Route path="/experiments" element={<Experiments />} />
         <Route path="/experiment/:id" element={<ExperimentPage />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);