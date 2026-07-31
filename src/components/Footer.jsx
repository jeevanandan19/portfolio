import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer
      className="py-10 relative"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg font-['Space_Grotesk'] gradient-text">Jeevanandan V</p>
          <p className="text-sm mt-1" style={{ color: "var(--t3)" }}>
            AI & ML Engineer · Python Developer · NLP Enthusiast
          </p>
        </div>

        <div className="flex gap-4">
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-full transition-all"
              style={{
                background: "var(--card2)",
                border: "1px solid var(--border)",
                color: "var(--t2)",
              }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>

        <p className="text-sm flex items-center gap-1.5" style={{ color: "var(--t3)" }}>
          Built with <Heart size={12} style={{ color: "var(--teal)" }} /> using React & Framer Motion
        </p>
      </div>
    </footer>
  );
}
