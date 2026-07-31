import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillCategories } from "../data/portfolio";

function SkillPill({ name, isTeal, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.75, y: 10 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.38, delay: index * 0.045, ease: "easeOut" }}
      whileHover={{ scale: 1.07, y: -3 }}
      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium cursor-default transition-all duration-200 hover:shadow-md"
      style={{
        border: `1px solid ${isTeal ? "rgba(0,217,192,0.25)" : "rgba(124,58,237,0.25)"}`,
        color: isTeal ? "var(--teal)" : "var(--violet)",
        background: isTeal ? "rgba(0,217,192,0.06)" : "rgba(124,58,237,0.06)",
      }}
    >
      {name}
    </motion.span>
  );
}

function CategoryBlock({ cat, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });
  const isTeal = cat.color === "teal";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative rounded-3xl p-8 overflow-hidden group"
      style={{
        backgroundColor: "var(--card)",
        border: "1px solid var(--border)",
        boxShadow: "0 4px 32px var(--shadow)",
      }}
    >
      {/* top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: isTeal
            ? "linear-gradient(to right, rgba(0,217,192,0.7), transparent)"
            : "linear-gradient(to right, rgba(124,58,237,0.7), transparent)",
        }}
      />

      {/* header */}
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
          style={{
            background: isTeal ? "rgba(0,217,192,0.08)" : "rgba(124,58,237,0.08)",
            border: `1px solid ${isTeal ? "rgba(0,217,192,0.20)" : "rgba(124,58,237,0.20)"}`,
          }}
        >
          {cat.icon}
        </div>
        <div>
          <h3
            className="font-bold text-lg font-['Space_Grotesk']"
            style={{ color: isTeal ? "var(--teal)" : "var(--violet)" }}
          >
            {cat.label}
          </h3>
          <p className="text-xs mt-0.5" style={{ color: "var(--t3)" }}>{cat.skills.length} skills</p>
        </div>
      </div>

      {/* pills */}
      <div className="flex flex-wrap gap-2.5 relative z-10">
        {cat.skills.map((skill, i) => (
          <SkillPill key={skill} name={skill} isTeal={isTeal} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Skills & Expertise</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--t2)" }}>
            A comprehensive toolkit built through academic projects, internships, and self-driven learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <CategoryBlock key={cat.label} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
