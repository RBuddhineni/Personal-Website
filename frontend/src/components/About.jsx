export default function About() {
  return (
    <div style={{
      padding: "40px",
      maxWidth: "900px",
      margin: "0 auto",
      display: "flex",
      gap: "40px",
      alignItems: "center"
    }}>
      
      {/* Left: Profile Image */}
      <img 
        src="/images/Raghav_Buddhineni_Photo.png"   // <-- replace with your image or upload to /public
        alt="Raghav Buddhineni"
        style={{
          width: "260px",
          height: "260px",
          objectFit: "cover",
          borderRadius: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
        }}
      />

      {/* Right: About Text */}
      <div>
        <h1 style={{ color: "var(--purple)", marginBottom: "16px" }}>About Me</h1>
        <p style={{ lineHeight: "1.7", fontSize: "17px", color: "#333" }}>
          Hey! I'm Raghav — a first-year Computer Science student at the University of Michigan
          who loves building things that make life easier for people.
          <br /><br />
          I’m passionate about AI, full-stack development, and turning ideas into products that
          actually help people — whether it's my <b>Varroa-mite AI model</b>, my
          <b> WonderBox nonprofit</b>, or new things I'm learning every day in West Quad.
          <br /><br />
          I'm currently exploring software engineering, AI startups, and product design, and
          my goal is to create technology that actually improves people’s lives.
        </p>
      </div>
    </div>
  );
}
