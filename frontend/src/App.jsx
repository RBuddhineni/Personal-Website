import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div className="app">
      <Hero />

      <section id="about" className="section-wrapper">
        <About />
      </section>

      <section id="projects" className="section-wrapper">
        <Projects />
      </section>

      <section id="experience" className="section-wrapper">
        <div style={{ padding: "60px 40px", maxWidth: "1100px", margin: "0 auto" }}>
          <h1 style={{ color: "var(--maize)", textAlign: "center", marginBottom: "20px" }}>
            Experience & Leadership
          </h1>
          <p style={{ textAlign: "center", color: "#bbb", fontSize: "1.1rem" }}>
            Coming soon! Check back for updates on my professional journey and leadership roles.
          </p>
        </div>
      </section>

      <section id="resume" className="section-wrapper">
        <Resume />
      </section>

      <section id="contact" className="section-wrapper">
        <ContactForm />
      </section>

      <footer style={{
        textAlign: "center",
        padding: "40px",
        background: "rgba(0,0,0,0.2)",
        marginTop: "60px",
        color: "#888"
      }}>
        <p>© 2025 Raghav Buddhineni. Built with React + Vite + Framer Motion</p>
      </footer>
    </div>
  );
}
