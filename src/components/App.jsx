import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import OnlinePresence from "./OnlinePresence/OnlinePresence";
import Terms from "./Terms/Terms";
import Privacy from "./Privacy/Privacy";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Footer from "./Footer/Footer";
import Chatbot from "./Chatbot/Chatbot";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/online-presence" element={<OnlinePresence />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
        <ScrollToTop />
        <Chatbot />
      </div>
    </Router>
  );
}