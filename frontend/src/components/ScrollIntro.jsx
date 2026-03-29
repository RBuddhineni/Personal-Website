import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LINES = [
  { text: "Hi, I'm Raghav.", size: "clamp(2rem, 5.5vw, 4.2rem)", weight: 800 },
  { text: "Student.",         size: "clamp(3rem, 9vw, 7rem)",     weight: 800 },
  { text: "Builder.",         size: "clamp(3rem, 9vw, 7rem)",     weight: 800 },
  { text: "Problem Solver.",  size: "clamp(2rem, 6vw, 4.8rem)",   weight: 800 },
  { text: "CS @ Michigan.",   size: "clamp(2rem, 5.5vw, 4.2rem)", weight: 800 },
  { text: "Welcome to my Portfolio.", size: "clamp(1.8rem, 5vw, 3.8rem)", weight: 800 },
];

function Word({ progress, start, end, text, size, weight }) {
  const opacity = useTransform(
    progress,
    [start, start + 0.06, end - 0.06, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [18, 0, 0, -18]
  );

  return (
    <motion.p
      style={{
        position: "absolute",
        opacity,
        y,
        willChange: "opacity, transform",
        fontSize: size,
        fontWeight: weight,
        color: "#FFCB05",
        letterSpacing: "-0.02em",
        textAlign: "center",
        width: "100%",
        padding: "0 24px",
        margin: 0,
        lineHeight: 1.1,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      {text}
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
  const hintOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  return (
    <div ref={containerRef} style={{ height: "576vh" }}>
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
          <Word
            key={i}
            progress={scrollYProgress}
            start={i * step}
            end={(i + 1) * step}
            text={line.text}
            size={line.size}
            weight={line.weight}
          />
        ))}

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
