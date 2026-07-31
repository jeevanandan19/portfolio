import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, Mail, MapPin, Github, Linkedin, ArrowDown } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import profileImg from "../assets/PROFILE-portfolio.png";
import resumePdf from "../assets/Jeevanandan_V_Resume.pdf";

const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 1,
  duration: Math.random() * 6 + 5,
  delay: Math.random() * 4,
}));

export default function Hero({ darkMode }) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-6, 6]), { stiffness: 120, damping: 18 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-stretch overflow-hidden mesh-bg"
    >
      {/* ── ambient particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`, top: `${p.y}%`,
              width: p.size, height: p.size,
              background: p.id % 2 === 0 ? "rgba(0,217,192,0.4)" : "rgba(124,58,237,0.3)",
            }}
            animate={{ y: [0, -22, 0], opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
        {/* grid dots */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "44px 44px" }}
        />
      </div>

      {/* ══════════════════════════════════
          SPLIT LAYOUT — no gap, flush join
         ══════════════════════════════════ */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row min-h-screen">

        {/* ── LEFT: photo — 45% wide, full height, no padding ── */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformPerspective: 1200, minHeight: "55vw" }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-[45%] w-full relative flex items-end justify-center overflow-hidden cursor-default"
        >
          {/* ambient glow — sits behind image */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 60% 40%, rgba(0,217,192,0.10) 0%, transparent 65%), " +
                "radial-gradient(ellipse at 30% 80%, rgba(124,58,237,0.08) 0%, transparent 60%)",
            }}
          />

          {/* ── the photo itself ── */}
          <img
            src={profileImg}
            alt="Jeevanandan V"
            className="w-full h-full object-cover object-top select-none"
            style={{
              /* fade bottom into page bg, fade right edge toward content */
              maskImage:
                "linear-gradient(to right, black 55%, transparent 100%), " +
                "linear-gradient(to bottom, black 60%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 55%, transparent 100%), " +
                "linear-gradient(to bottom, black 60%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "destination-in",
            }}
          />

          {/* right-side gradient bridge */}
          <div
            className="absolute top-0 right-0 w-32 h-full pointer-events-none"
            style={{ background: `linear-gradient(to right, transparent, ${darkMode ? "#0a0f1e" : "#f1f5f9"})` }}
          />
        </motion.div>

        {/* ── RIGHT: content — fills remaining width, vertically centred ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="flex-1 flex flex-col justify-center px-10 lg:px-16 py-28 space-y-7"
        >
          {/* name */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold font-['Space_Grotesk'] leading-[1.1]"
          >
            Hi, I'm
            <span className="gradient-text block mt-2">{personalInfo.name}</span>
          </motion.h1>

          {/* typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
            className="text-lg lg:text-xl text-slate-300 font-medium h-8"
          >
            <TypeAnimation
              sequence={personalInfo.roles.flatMap((r) => [r, 2200])}
              wrapper="span" speed={52} repeat={Infinity}
              className="text-teal-400"
            />
          </motion.div>

          {/* summary */}
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52 }}
            className="text-slate-400 text-sm lg:text-base leading-relaxed max-w-lg"
          >
            {personalInfo.summary}
          </motion.p>

          {/* location */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58 }}
            className="flex items-center gap-2 text-slate-500 text-sm"
          >
            <MapPin size={13} className="text-teal-400" />
            {personalInfo.location}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.66 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href={resumePdf} download="Jeevanandan_V_Resume.pdf"
              whileHover={{ scale: 1.05, boxShadow: "0 0 26px rgba(0,217,192,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-teal-400 to-violet-600 text-white shadow-lg"
            >
              <Download size={15} /> Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-teal-400/30 text-teal-400 hover:bg-teal-400/10 transition-colors"
            >
              <Mail size={15} /> Contact Me
            </motion.a>
          </motion.div>

          {/* social icons */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="flex gap-3"
          >
            {[
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-teal-400 hover:border-teal-400/30 transition-all"
              >
                <Icon size={19} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 z-20"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={15} className="text-teal-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
