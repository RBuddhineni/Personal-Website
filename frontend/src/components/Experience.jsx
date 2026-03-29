import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Add new entries to the TOP of this array (most recent first) ───────────
const experiences = [
  {
    role: "Tech Analyst",
    company: "Michigan Ross Tech Plus Consulting",
    location: "Ann Arbor, MI",
    dates: "January 2026 – Present",
    bullets: [
      "Designed a live, role-based operational dashboard for Michigan Athletics Facilities, consolidating 10+ logs into a single KPI snapshot with 15–20 key performance metrics and hourly to weekly refresh cadences.",
      "Developed dashboard template piloted across 2 facilities, reducing manual reporting time by 30–40%.",
    ],
  },
  {
    role: "Project Manager",
    company: "Tech 4 Social Good",
    location: "Ann Arbor, MI",
    dates: "October 2025 – Present",
    bullets: [
      "Leading a team of 6+ developers and designers to build a new website for Friends in Deed, a local Ann Arbor nonprofit. Facilitating weekly client meetings to define requirements, gather feedback, and ensure alignment with organizational goals.",
      "Overseeing both front-end and back-end development to deliver an accessible, scalable, and user-friendly web platform.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Aurus Inc.",
    location: "Norwood, MA",
    dates: "May 2024 – August 2024",
    bullets: [
      "Used proprietary software solutions to install OS, software, and encryption keys to conduct security protocols for payment devices used by Fortune 500 retail clients.",
      "Validated device configurations and ensured compliance with customer SLAs; coordinated technical tasks and supported project timelines for multiple clients.",
    ],
  },
  {
    role: "Founder / CEO",
    company: "Wonderbox",
    location: "Nashua, NH",
    dates: "March 2023 – June 2025",
    bullets: [
      "Co-founded WonderBox, a 501(c)(3) nonprofit dedicated to combating loneliness among seniors in care homes through personalized care packages and handwritten letters.",
      "Led the distribution of 100+ care boxes in Nashua and built a team of 75+ volunteers, as featured in the local newspaper. Spearheaded the development of new chapters nationwide to expand impact and reach more seniors.",
    ],
  },
];

function TimelineEntry({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
      transition={{ duration: 0.5, delay: inView ? index * 0.08 : 0 }}
      style={{
        display: "flex",
        gap: "36px",
        marginBottom: index < experiences.length - 1 ? "48px" : "0",
        position: "relative",
      }}
    >
      {/* Dot */}
      <div style={{ flexShrink: 0, paddingTop: "4px" }}>
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background: "var(--purple)",
            border: "2px solid rgba(108, 92, 231, 0.4)",
            boxShadow: "0 0 8px rgba(108, 92, 231, 0.5)",
            marginLeft: "12px",
          }}
        />
      </div>

      {/* Card */}
      <div
        style={{
          flex: 1,
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          padding: "24px 28px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "4px",
          }}
        >
          <h2 style={{ color: "#fff", fontSize: "1.05rem", fontWeight: 700, margin: 0 }}>
            {exp.role}
          </h2>
          <span style={{ color: "var(--maize)", fontSize: "0.85rem", fontWeight: 600, whiteSpace: "nowrap" }}>
            {exp.dates}
          </span>
        </div>

        <p style={{ color: "var(--purple-light)", fontSize: "0.9rem", marginBottom: "16px" }}>
          {exp.company} &nbsp;·&nbsp; {exp.location}
        </p>

        <ul style={{ paddingLeft: "18px", margin: 0 }}>
          {exp.bullets.map((b, j) => (
            <li
              key={j}
              style={{
                color: "#bbb",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                marginBottom: j < exp.bullets.length - 1 ? "8px" : 0,
              }}
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const titleRef = useRef(null);
  const resumeRef = useRef(null);
  const titleInView = useInView(titleRef, { margin: "-60px" });
  const resumeInView = useInView(resumeRef, { margin: "-60px" });

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
      <motion.h1
        ref={titleRef}
        style={{ color: "var(--purple)", textAlign: "center", marginBottom: "60px" }}
        animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -20 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h1>

      {/* Timeline */}
      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: "18px",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(to bottom, var(--purple), rgba(108, 92, 231, 0.1))",
          }}
        />

        {experiences.map((exp, i) => (
          <TimelineEntry key={i} exp={exp} index={i} />
        ))}
      </div>

      {/* Resume button */}
      <motion.div
        ref={resumeRef}
        style={{ textAlign: "center", marginTop: "60px" }}
        animate={{ opacity: resumeInView ? 1 : 0, y: resumeInView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <p style={{ color: "#888", marginBottom: "16px", fontSize: "0.95rem" }}>
          Want the full picture?
        </p>
        <a
          href="/images/RaghavProjectsResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 28px",
            background: "var(--purple)",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 12px rgba(108, 92, 231, 0.35)",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          View / Download Resume →
        </a>
      </motion.div>
    </div>
  );
}
