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
    // Add more projects like this ↓
    // {
    //   title: "",
    //   image: "",
    //   description: "",
    //   link: ""
    // }
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
              border: "1px solid rgba(255,255,255,0.08)",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(138, 43, 226, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onClick={() => window.open(project.link, "_blank")}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2 style={{ color: "var(--purple)", marginBottom: "10px" }}>
                {project.title}
              </h2>
              <p style={{ color: "#ccc", fontSize: "0.95rem" }}>
                {project.description}
              </p>

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

