import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import RouteScrollToTop from "./RouteScrollToTop";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Footer from "./Footer/Footer";
import Chatbot from "./Chatbot/Chatbot";

// Lazy-loaded route components for code splitting
const Home = lazy(() => import("./Home/Home"));
const About = lazy(() => import("./About/About"));
const Projects = lazy(() => import("./Projects/Projects"));
const Skills = lazy(() => import("./Skills"));
const Resume = lazy(() => import("./Resume"));
const Contact = lazy(() => import("./Contact"));
const OnlinePresence = lazy(() => import("./OnlinePresence/OnlinePresence"));
const Terms = lazy(() => import("./Terms/Terms"));
const Privacy = lazy(() => import("./Privacy/Privacy"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
const Blog = lazy(() => import("./Blog/Blog"));

function PageLoader() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        width: 40,
        height: 40,
        border: '3px solid rgba(124,58,237,0.2)',
        borderTopColor: '#a78bfa',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <RouteScrollToTop />
      <ErrorBoundary>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <div className="app">
          <Suspense fallback={<PageLoader />}>
            <main id="main-content">
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
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </main>
          </Suspense>
          <Footer />
          <ScrollToTop />
          <Chatbot />
        </div>
      </ErrorBoundary>
    </Router>
  );
}