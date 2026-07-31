import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });
  const isTeal = project.color === "teal";
  const isEven = index % 2 === 0;
  const accent = isTeal ? "var(--teal)" : "var(--violet)";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -55 : 55 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl p-7 flex flex-col gap-5 overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: "var(--card)",
        border: "1px solid var(--border)",
        boxShadow: "0 4px 32px var(--shadow)",
      }}
    >
      {/* top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
      />

      {/* header */}
      <div className="flex items-start justify-between gap-3 relative z-10">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
          style={{
            background: isTeal ? "rgba(0,217,192,0.08)" : "rgba(124,58,237,0.08)",
            border: `1px solid ${isTeal ? "rgba(0,217,192,0.20)" : "rgba(124,58,237,0.20)"}`,
          }}
        >
          {project.icon}
        </div>
        <a
          href={project.github} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium transition-all"
          style={{
            border: `1px solid ${isTeal ? "rgba(0,217,192,0.20)" : "rgba(124,58,237,0.20)"}`,
            color: accent,
            opacity: 0.75,
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "1"}
          onMouseLeave={e => e.currentTarget.style.opacity = "0.75"}
        >
          <Github size={12} /> View on GitHub
        </a>
      </div>

      {/* title */}
      <h3
        className="text-base font-bold font-['Space_Grotesk'] leading-snug relative z-10 transition-colors"
        style={{ color: "var(--t1)" }}
      >
        {project.title}
      </h3>

      {/* description */}
      <p className="text-sm leading-relaxed flex-1 relative z-10" style={{ color: "var(--t2)" }}>
        {project.description}
      </p>

      {/* tech pills */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-[11px] rounded-full font-medium"
            style={{
              border: `1px solid ${isTeal ? "rgba(0,217,192,0.20)" : "rgba(124,58,237,0.20)"}`,
              color: isTeal ? "var(--teal)" : "var(--violet)",
              background: isTeal ? "rgba(0,217,192,0.05)" : "rgba(124,58,237,0.05)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 section-stripe pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">GitHub Projects</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--t2)" }}>
            5 real-world AI/ML projects — all open-source, all on GitHub.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/jeevanandan19" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors group"
            style={{ color: "var(--t3)" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--teal)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--t3)"}
          >
            <Github size={16} />
            View all repositories on GitHub
            <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
