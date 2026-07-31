import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xzzpbwpd", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) setForm({ name: "", email: "", message: "" });
    } catch { setStatus("error"); }
  };

  const contactLinks = [
    { icon: Mail,     label: "Email",    value: personalInfo.email,                  href: `mailto:${personalInfo.email}` },
    { icon: Phone,    label: "Phone",    value: personalInfo.phone,                  href: `tel:${personalInfo.phone}` },
    { icon: MapPin,   label: "Location", value: personalInfo.location,               href: null },
    { icon: Github,   label: "GitHub",   value: "github.com/jeevanandan19",          href: personalInfo.github },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/jeevanandan-v",     href: personalInfo.linkedin },
  ];

  const inputStyle = {
    backgroundColor: "var(--card2)",
    border: "1px solid var(--border2)",
    color: "var(--t1)",
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 section-stripe pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Get In Touch</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--t2)" }}>
            Open to internships, full-time roles, and collaboration on interesting AI/ML projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — contact links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold font-['Space_Grotesk']" style={{ color: "var(--t1)" }}>
              Let's connect
            </h3>
            <p style={{ color: "var(--t2)" }} className="leading-relaxed">
              Whether you have a project in mind, want to discuss AI/ML ideas, or are hiring — I'd love to hear from you. Drop a message and I'll get back to you promptly.
            </p>

            <div className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <motion.div key={label} whileHover={{ x: 4 }} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(0,217,192,0.08)",
                      border: "1px solid rgba(0,217,192,0.20)",
                    }}
                  >
                    <Icon size={16} style={{ color: "var(--teal)" }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium" style={{ color: "var(--t3)" }}>{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm transition-colors"
                        style={{ color: "var(--t2)" }}
                        onMouseEnter={e => e.currentTarget.style.color = "var(--teal)"}
                        onMouseLeave={e => e.currentTarget.style.color = "var(--t2)"}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: "var(--t2)" }}>{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 space-y-5"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                boxShadow: "0 4px 40px var(--shadow)",
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "var(--t3)" }}>Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    required placeholder="Your name" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "rgba(0,217,192,0.45)"}
                    onBlur={e => e.target.style.borderColor = "var(--border2)"}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "var(--t3)" }}>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    required placeholder="your@email.com" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "rgba(0,217,192,0.45)"}
                    onBlur={e => e.target.style.borderColor = "var(--border2)"}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: "var(--t3)" }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  required rows={5} placeholder="Tell me about the opportunity or project..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={e => e.target.style.borderColor = "rgba(0,217,192,0.45)"}
                  onBlur={e => e.target.style.borderColor = "var(--border2)"}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                whileHover={{ scale: 1.02, boxShadow: "0 0 24px rgba(0,217,192,0.35)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 disabled:opacity-60 transition-all"
                style={{ background: "linear-gradient(to right, var(--teal), var(--violet))" }}
              >
                {status === "sent" ? (
                  <><CheckCircle size={16} /> Message Sent!</>
                ) : status === "sending" ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full" />
                    Sending...
                  </>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </motion.button>

              {status === "error" && (
                <p className="text-red-400 text-xs text-center">
                  Something went wrong. Email directly at{" "}
                  <a href={`mailto:${personalInfo.email}`} className="underline">{personalInfo.email}</a>
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
