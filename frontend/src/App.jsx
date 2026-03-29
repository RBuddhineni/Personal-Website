import ScrollIntro from "./components/ScrollIntro";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import InteractiveBackground from "./components/InteractiveBackground";

export default function App() {
  return (
    <div className="app">
      <InteractiveBackground />
      <ScrollIntro />
      <Hero />

      <section id="about" className="section-wrapper">
        <About />
      </section>

      <section id="projects" className="section-wrapper">
        <Projects />
      </section>

      <section id="experience" className="section-wrapper">
        <Experience />
      </section>

      <section id="contact" className="section-wrapper">
        <ContactForm />
      </section>

      <footer style={{
        textAlign: "center",
        padding: "40px",
        background: "rgba(0,0,0,0.2)",
        color: "#888"
      }}>
        <p>© 2025 Raghav Buddhineni. Built with React + Vite + Framer Motion</p>
      </footer>
    </div>
  );
}
