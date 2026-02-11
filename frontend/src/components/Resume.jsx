export default function Resume() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ color: "var(--purple)" }}>Resume</h1>

      <p style={{ marginTop: "20px", color: "#888" }}>
        Click below to view or download my resume.
      </p>

      <a
        href="/images/RaghavResumeWebsite.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "25px",
          padding: "12px 24px",
          background: "var(--purple)",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 4px 12px rgba(108, 92, 231, 0.3)",
          transition: "0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        View / Download Resume
      </a>
    </div>
  );
}

