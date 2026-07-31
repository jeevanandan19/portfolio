import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "../data/portfolio";
import { CheckCircle2, Calendar, MapPin } from "lucide-react";

function ExperienceItem({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15 }}
      className={`relative flex gap-6 ${isLeft ? "flex-row" : "flex-row-reverse"} items-start`}
    >
      {/* Timeline icon */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl z-10"
          style={{
            backgroundColor: "var(--card)",
            border: "1px solid rgba(0,217,192,0.20)",
            boxShadow: "0 0 18px rgba(0,217,192,0.10)",
          }}
        >
          {item.icon}
        </div>
        {index < experience.length - 1 && (
          <div className="w-[1px] h-16 mt-2"
            style={{ background: "linear-gradient(to bottom, rgba(0,217,192,0.3), transparent)" }} />
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.015 }}
        className="flex-1 rounded-2xl p-6 transition-all duration-300"
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
          boxShadow: "0 4px 28px var(--shadow)",
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold font-['Space_Grotesk']" style={{ color: "var(--t1)" }}>
              {item.role}
            </h3>
            <p className="font-semibold text-sm mt-0.5" style={{ color: "var(--teal)" }}>
              {item.company}
            </p>
          </div>
          <div className="flex flex-col gap-1.5 items-end">
            <span
              className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full"
              style={{ color: "var(--t2)", background: "var(--card2)", border: "1px solid var(--border)" }}
            >
              <Calendar size={11} /> {item.period}
            </span>
            <span
              className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full"
              style={{ color: "var(--t3)", background: "var(--card2)", border: "1px solid var(--border)" }}
            >
              <MapPin size={11} /> {item.type}
            </span>
          </div>
        </div>

        <ul className="space-y-2.5">
          {item.points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + i * 0.08 + 0.25 }}
              className="flex items-start gap-2.5 text-sm"
              style={{ color: "var(--t2)" }}
            >
              <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--teal)" }} />
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Experience</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--t2)" }}>
            Professional roles that shaped my skills in data science, development, and coordination.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experience.map((item, i) => (
            <ExperienceItem key={`${item.company}-${i}`} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
