import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Apply theme to BOTH html and body so every CSS var resolves correctly
    const html = document.documentElement;
    const body = document.body;
    const theme = darkMode ? "dark" : "light";
    html.setAttribute("data-theme", theme);
    body.setAttribute("data-theme", theme);
    html.style.backgroundColor = darkMode ? "#0a0f1e" : "#f1f5f9";
    body.style.backgroundColor = darkMode ? "#0a0f1e" : "#f1f5f9";
    body.style.color = darkMode ? "#e2e8f0" : "#0f172a";
  }, [darkMode]);

  return (
    <div data-theme={darkMode ? "dark" : "light"} style={{ minHeight: "100vh" }}>
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode((d) => !d)} />
      <main>
        <Hero darkMode={darkMode} />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
