import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./sections/First";
import About from "./pages/About";
import Projects from "./pages/Projects";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-base text-textPrimary scroll-smooth min-h-screen flex flex-col">
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.main
                className="flex-grow pt-20"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Hero />
              </motion.main>
            }
          />
          <Route
            path="/about"
            element={
              <motion.main
                className="flex-grow pt-20"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About />
              </motion.main>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.main
                className="flex-grow pt-20"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Projects />
              </motion.main>
            }
          />
          {/* Add other routes here */}
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
