import { motion } from "framer-motion";

export default function PortalButton({ title, description, icon, targetId, gradient, delay = 0 }) {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.button
      onClick={scrollToSection}
      className="portal-button"
      style={{ background: gradient }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
        y: -8
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="portal-button-content">
        <div className="portal-icon">{icon}</div>
        <h3 className="portal-title">{title}</h3>
        <p className="portal-description">{description}</p>
      </div>
      <div className="portal-glow" style={{ background: gradient }}></div>
    </motion.button>
  );
}
