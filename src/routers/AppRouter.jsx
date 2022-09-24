import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Homepages from "../pages/HomePages"
import AboutPage from "../pages/AboutPage"
import CoursePage from "../pages/CoursePage";

const AppRouter = () => {
    return (
  <>
    <Router>
    <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/about" element={<AboutPage />} />  
        <Route path="/course" element={<CoursePage />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>    
    </Router>
  </>
  )
};

export default AppRouter;
