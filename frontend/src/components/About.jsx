import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const textRef  = useRef(null);

  const titleInView = useInView(titleRef, { margin: "-60px" });
  const imageInView = useInView(imageRef, { margin: "-60px" });
  const textInView  = useInView(textRef,  { margin: "-60px" });

  return (
    <div className="about-container">
      <motion.h1
        ref={titleRef}
        className="about-title"
        animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -20 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <div className="about-content">
        <motion.div
          ref={imageRef}
          className="about-image-wrapper"
          animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : -40 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-image-frame">
            <img
              src="/images/Raghav_Buddhineni_Photo.png"
              alt="Raghav Buddhineni"
              className="about-image about-image-contain"
            />
            <div className="image-glow"></div>
          </div>

          <div className="about-image-frame about-image-secondary">
            <img
              src="/images/tennis.png"
              alt="Raghav playing tennis"
              className="about-image"
            />
            <div className="image-glow"></div>
          </div>
        </motion.div>

        <motion.div
          ref={textRef}
          className="about-text"
          animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : 40 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-card">
            <p className="about-paragraph">
              My name is Raghav Buddhineni, and I grew up in <span className="highlight">Nashua, New Hampshire</span>, where I
              attended Nashua High School South and discovered how much I enjoy building things
              and competing. Through DECA, robotics, and my nonprofit WonderBox, I learned that
              I like creating solutions that help people and taking on challenges that actually
              matter. A lot of who I am today comes from the community I had back home and the
              experiences that pushed me to grow.
            </p>

            <p className="about-paragraph">
              I am now a first year <span className="highlight">Computer Science</span> student at the <span className="highlight">University of Michigan</span>,
              where I have met some of the most driven and like minded people I have ever been
              around. Whether it is through classes, clubs, or late night conversations in
              West Quad, I am constantly surrounded by people who want to build, innovate,
              and make an impact. Being here has pushed me to think bigger, improve my skills,
              and explore new ideas every day.
            </p>

            <p className="about-paragraph">
              Right now I am exploring opportunities in <span className="highlight">software development</span>, <span className="highlight">artificial intelligence</span>, and <span className="highlight">tech consulting</span>. I want to work in a space where I can combine
              technical problem solving with creativity and real world impact, whether that
              comes from working at a startup, joining a team in industry, or creating
              something of my own.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
