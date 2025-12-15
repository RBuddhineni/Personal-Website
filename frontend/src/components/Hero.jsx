import { motion } from "framer-motion";
import PortalButton from "./PortalButton";

export default function Hero() {
  const portals = [
    {
      title: "About Me",
      description: "Learn about my journey",
      icon: "👤",
      targetId: "about",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      delay: 0.1
    },
    {
      title: "Projects",
      description: "Explore what I've built",
      icon: "🚀",
      targetId: "projects",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      delay: 0.2
    },
    {
      title: "Experience",
      description: "My professional journey",
      icon: "💼",
      targetId: "experience",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      delay: 0.3
    },
    {
      title: "Resume",
      description: "View my credentials",
      icon: "📄",
      targetId: "resume",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      delay: 0.4
    },
    {
      title: "Contact",
      description: "Let's connect",
      icon: "💬",
      targetId: "contact",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      delay: 0.5
    }
  ];

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Hi, I'm <span className="name-highlight">Raghav Buddhineni</span>
          </h1>
          <p className="hero-subtitle">
            I build tech solutions to make everyday life easier.
          </p>
          <div className="hero-tagline">
            <span className="tag">CS @ Michigan</span>
            <span className="tag">AI Enthusiast</span>
            <span className="tag">Builder</span>
          </div>
        </motion.div>

        <motion.div
          className="portal-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {portals.map((portal, index) => (
            <PortalButton key={index} {...portal} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
