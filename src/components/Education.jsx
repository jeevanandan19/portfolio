import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { education } from "../data/portfolio";

function RoadStop({ edu, index, total }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isTeal = index % 2 === 0;
  const accent = isTeal ? "var(--teal)" : "var(--violet)";
  const accentRgb = isTeal ? "0,217,192" : "124,58,237";

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_auto_1fr] items-center">

      {/* LEFT card (even) */}
      <div className="pr-8 flex justify-end">
        {isTeal && (
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            whileHover={{ scale: 1.02, x: -3 }}
            className="relative rounded-2xl p-6 max-w-sm w-full overflow-hidden"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              boxShadow: `0 4px 32px rgba(${accentRgb},0.10)`,
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: `linear-gradient(to right, ${accent}, transparent)` }} />
            <EduCard edu={edu} accent={accent} accentRgb={accentRgb} />
          </motion.div>
        )}
      </div>

      {/* Centre node */}
      <div className="flex flex-col items-center z-10">
        <motion.div
          animate={inView ? { scale: [1, 1.4, 1], opacity: [0.35, 0, 0.35] } : {}}
          transition={{ duration: 2.4, repeat: Infinity }}
          className="absolute w-8 h-8 rounded-full"
          style={{ border: `1px solid rgba(${accentRgb},0.35)` }}
        />
        <motion.div
          initial={{ scale: 0, rotate: -25 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: "spring", stiffness: 240, damping: 16, delay: 0.08 }}
          className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
          style={{
            backgroundColor: "var(--card)",
            border: `2px solid rgba(${accentRgb},0.35)`,
            boxShadow: `0 0 18px rgba(${accentRgb},0.20)`,
          }}
        >
          {edu.icon}
        </motion.div>

        {/* connector to next */}
        {index < total - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.65, delay: 0.45 }}
            className="w-[2px] h-20 mt-1"
            style={{ transformOrigin: "top", background: "linear-gradient(to bottom, rgba(255,255,255,0.10), transparent)" }}
          />
        )}
      </div>

      {/* RIGHT card (odd) */}
      <div className="pl-8 flex justify-start">
        {!isTeal && (
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            whileHover={{ scale: 1.02, x: 3 }}
            className="relative rounded-2xl p-6 max-w-sm w-full overflow-hidden"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              boxShadow: `0 4px 32px rgba(${accentRgb},0.10)`,
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: `linear-gradient(to right, ${accent}, transparent)` }} />
            <EduCard edu={edu} accent={accent} accentRgb={accentRgb} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function EduCard({ edu, accent, accentRgb }) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-bold font-['Space_Grotesk'] leading-snug" style={{ color: "var(--t1)" }}>
        {edu.degree}
      </h3>
      <p className="text-sm" style={{ color: "var(--t2)" }}>{edu.institution}</p>
      <div className="flex flex-wrap gap-2 pt-1">
        <span
          className="text-xs px-3 py-1 rounded-full font-semibold"
          style={{
            color: accent,
            background: `rgba(${accentRgb},0.08)`,
            border: `1px solid rgba(${accentRgb},0.22)`,
          }}
        >
          {edu.score}
        </span>
        <span
          className="text-xs px-3 py-1 rounded-full"
          style={{ color: "var(--t3)", background: "var(--card2)", border: "1px solid var(--border)" }}
        >
          {edu.period}
        </span>
      </div>
    </div>
  );
}

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 section-stripe pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="section-title mb-4">Education</h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--t2)" }}>
            The academic journey — from school to specialised AI/ML engineering.
          </p>
        </motion.div>

        <div className="relative">
          {/* vertical spine */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] pointer-events-none"
            style={{ background: "linear-gradient(to bottom, var(--teal), var(--violet), transparent)", opacity: 0.25 }}
          />

          {/* Present marker — TOP */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--t3)" }}>
                Present
              </span>
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  background: "linear-gradient(135deg, var(--teal), var(--violet))",
                  boxShadow: "0 0 14px rgba(0,217,192,0.5)",
                }}
              />
            </div>
          </motion.div>

          <div className="space-y-0">
            {education.map((edu, i) => (
              <RoadStop key={edu.degree} edu={edu} index={i} total={education.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
