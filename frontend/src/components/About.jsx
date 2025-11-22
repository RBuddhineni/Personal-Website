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
        My name is Raghav Buddhineni, and I grew up in <b>Nashua, New Hampshire</b>, where I 
        attended Nashua High School South and discovered how much I enjoy building things
         and competing. Through DECA, robotics, and my nonprofit WonderBox, I learned that
          I like creating solutions that help people and taking on challenges that actually
           matter. A lot of who I am today comes from the community I had back home and the
            experiences that pushed me to grow.
            <br /><br />
        I am now a first year <b>Computer Science</b> student at the <b>University of Michigan</b>, 
        where I have met some of the most driven and like minded people I have ever been
         around. Whether it is through classes, clubs, or late night conversations in 
         West Quad, I am constantly surrounded by people who want to build, innovate, 
         and make an impact. Being here has pushed me to think bigger, improve my skills,
          and explore new ideas every day.
          <br /><br />
        Right now I am exploring opportunities in <b>software development</b>, <b>artifical intelligence</b>
        , and <b>tech consulting</b>. I want to work in a space where I can combine
         technical problem solving with creativity and real world impact, whether that 
         comes from working at a startup, joining a team in industry, or creating 
         something of my own.
        </p>
      </div>
    </div>
  );
}
