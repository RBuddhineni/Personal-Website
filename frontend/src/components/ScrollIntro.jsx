import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LINES = [
  {
    text: "Hi, I'm Raghav.",
    size: "clamp(2rem, 5.5vw, 4.2rem)",
    weight: 800,
    color: "#ffffff",
    letterSpacing: "-0.02em",
  },
  {
    text: "Student.",
    size: "clamp(3rem, 9vw, 7rem)",
    weight: 800,
    color: "#ffffff",
    letterSpacing: "-0.03em",
  },
  {
    text: "Builder.",
    size: "clamp(3rem, 9vw, 7rem)",
    weight: 800,
    color: "#FFCB05",
    letterSpacing: "-0.03em",
  },
  {
    text: "Problem Solver.",
    size: "clamp(2rem, 6vw, 4.8rem)",
    weight: 800,
    color: "#ffffff",
    letterSpacing: "-0.02em",
  },
  {
    text: "CS @ Michigan.",
    size: "clamp(2rem, 5.5vw, 4.2rem)",
    weight: 800,
    color: "#a29bfe",
    letterSpacing: "-0.02em",
  },
];

function ScrollWord({ line, progress, start, end }) {
  // Fade in over first ~25% of this word's range, fade out over last ~25%
  const opacity = useTransform(
    progress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  );
  // Float up from below on enter, continue floating up on exit
  const y = useTransform(
    progress,
    [start, start + 0.09, end - 0.09, end],
    [36, 0, 0, -36]
  );
  const scale = useTransform(
    progress,
    [start, start + 0.09],
    [0.94, 1]
  );

  return (
    <motion.p
      style={{
        position: "absolute",
        opacity,
        y,
        scale,
        fontSize: line.size,
        fontWeight: line.weight,
        color: line.color,
        letterSpacing: line.letterSpacing,
        textAlign: "center",
        width: "100%",
        padding: "0 24px",
        margin: 0,
        lineHeight: 1.1,
        pointerEvents: "none",
        userSelect: "none",
      }}
    />
  );
}

// Separate component so the text renders but motion values drive it
function ScrollWordInner({ line, progress, start, end }) {
  const opacity = useTransform(
    progress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [start, start + 0.09, end - 0.09, end],
    [36, 0, 0, -36]
  );
  const scale = useTransform(progress, [start, start + 0.09], [0.94, 1]);

  return (
    <motion.p
      style={{
        position: "absolute",
        opacity,
        y,
        scale,
        fontSize: line.size,
        fontWeight: line.weight,
        color: line.color,
        letterSpacing: line.letterSpacing,
        textAlign: "center",
        width: "100%",
        padding: "0 24px",
        margin: 0,
        lineHeight: 1.1,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      {line.text}
    </motion.p>
  );
}

export default function ScrollIntro() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const step = 1 / LINES.length;

  // Scroll hint fades out once the user starts scrolling
  const hintOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  return (
    <div ref={containerRef} style={{ height: "480vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {LINES.map((line, i) => (
          <ScrollWordInner
            key={i}
            line={line}
            progress={scrollYProgress}
            start={i * step}
            end={(i + 1) * step}
          />
        ))}

        {/* Bounce-scroll hint */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "50%",
            x: "-50%",
            opacity: hintOpacity,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            color: "rgba(255,255,255,0.35)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            pointerEvents: "none",
          }}
        >
          <span>scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            style={{ fontSize: "1rem" }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}
