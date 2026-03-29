export default function Projects() {
  const projects = [
    {
      title: "AI Bee Varroa Mite Detector",
      image: "/images/BeeCard.png",
      description:
        "A computer-vision CNN model that detects Varroa mites on honey bees with high accuracy.",
      link: "https://github.com/RBuddhineni/ML-Bee-Research",
    },
    {
      title: "AI Face Detector",
      image: "/images/FaceDetect.png",
      description:
        "Face Detection using Machine Learning Models: OpenCV and Mediapipe",
      link: "https://github.com/RBuddhineni/Face_Detection",
    },
    {
      title: "Personal Website",
      image: "/images/PersonalWebsite.png",
      description:
        "A modern, responsive personal portfolio website built with React and deployed on Vercel.",
      link: "https://github.com/RBuddhineni/Personal-Website",
    },
    {
      title: "ScopePlus",
      image: "/images/ScopePlus.png",
      description:
        "A Chrome extension that scrapes Gradescope submissions and calls the Anthropic API (Claude) to generate personalized diagnostic reports and practice questions targeting each student's weak areas. Awarded Best Concept at the UMich MDC AI Hackathon.",
      link: "https://github.com/RBuddhineni",
      inProgress: true,
      tags: "JavaScript · Firebase · Anthropic API",
    },
    {
      title: "FratMap",
      image: "/images/FratMap.png",
      imagePosition: "left center",
      description:
        "A cross-platform mobile social app for college nightlife — featuring event discovery, friend grouping, live location sharing, and real-time coordination. Selected as one of 10 projects at V1 Demo Day.",
      link: "https://github.com/RBuddhineni",
      inProgress: true,
      tags: "Swift · Firebase · Twilio · Google Maps API",
    },
    {
      title: "Yost Facilities Dashboard",
      image: "/images/Yost.png",
      description:
        "A lightweight, client-only dashboard for Yost Facilities staff to monitor facility check-ins. Aggregates data from four sectors (Ice Quality Reports, Softball Therapy Pool Checks, Fisher Therapy Pool Checks, Yost Ice Depth Checks) via published Google Sheets JSON endpoints — no backend or database required.",
      isPrivate: true,
      tags: "JavaScript · Google Sheets API · HTML/CSS",
    },
  ];

  return (
    <div style={{ padding: "40px", maxWidth: "1100px", margin: "0 auto" }}>
      <h1 style={{ color: "var(--purple)", textAlign: "center" }}>Projects</h1>

      <p style={{ textAlign: "center", color: "#bbb", marginTop: "10px" }}>
        A collection of things I built — tap any card to learn more.
      </p>

      {/* GRID CONTAINER */}
      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              borderRadius: "16px",
              border: project.inProgress
                ? "1px solid rgba(138, 43, 226, 0.4)"
                : project.isPrivate
                ? "1px solid rgba(220, 53, 69, 0.4)"
                : "1px solid rgba(255,255,255,0.08)",
              overflow: "hidden",
              cursor: project.isPrivate ? "default" : "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = project.isPrivate
                ? "0 0 20px rgba(220, 53, 69, 0.4)"
                : "0 0 20px rgba(138, 43, 226, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onClick={() => project.link && window.open(project.link, "_blank")}
          >
            {project.inProgress && (
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  background: "rgba(138, 43, 226, 0.85)",
                  color: "#fff",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  zIndex: 1,
                }}
              >
                🔨 In Progress
              </div>
            )}

            {project.isPrivate && (
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  background: "rgba(220, 53, 69, 0.85)",
                  color: "#fff",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  zIndex: 1,
                }}
              >
                🔒 Private
              </div>
            )}

            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                objectPosition: project.imagePosition || "center",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2 style={{ color: "var(--purple)", marginBottom: "6px" }}>
                {project.title}
              </h2>

              {project.tags && (
                <p style={{ color: "#888", fontSize: "0.78rem", marginBottom: "10px" }}>
                  {project.tags}
                </p>
              )}

              <p style={{ color: "#ccc", fontSize: "0.95rem" }}>
                {project.description}
              </p>

              {project.link && !project.isPrivate && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "12px",
                    color: "var(--purple)",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

