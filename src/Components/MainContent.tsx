import React from "react";
import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Project } from "../Pages/Project";
import { Routes, Route } from "react-router-dom";
import "../App.css";

function MainContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default MainContent;
