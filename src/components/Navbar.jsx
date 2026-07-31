import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Brain } from "lucide-react";

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = navLinks.map((l) => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 110) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.a href="#home" whileHover={{ scale: 1.05 }} className="flex items-center gap-2 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg transition-shadow"
            style={{ background: "linear-gradient(135deg, var(--teal), var(--violet))" }}
          >
            <Brain size={18} className="text-white" />
          </div>
          <span className="text-sm font-bold font-['Space_Grotesk'] gradient-text hidden sm:block">
            Jeevanandan V
          </span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200"
                style={{ color: isActive ? "var(--teal)" : "var(--t2)" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "rgba(0,217,192,0.08)", border: "1px solid rgba(0,217,192,0.18)" }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.9 }}
            onClick={toggleDark}
            className="p-2 rounded-full transition-colors"
            style={{
              background: "var(--card2)",
              border: "1px solid var(--border)",
              color: "var(--t2)",
            }}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </motion.button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full"
            style={{ background: "var(--card2)", border: "1px solid var(--border)", color: "var(--t2)" }}
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-md"
            style={{ backgroundColor: "var(--nav)", borderTop: "1px solid var(--border)" }}
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 px-4 rounded-xl text-sm font-medium transition-all"
                    style={{
                      color: isActive ? "var(--teal)" : "var(--t2)",
                      background: isActive ? "rgba(0,217,192,0.07)" : "transparent",
                      border: isActive ? "1px solid rgba(0,217,192,0.18)" : "1px solid transparent",
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
